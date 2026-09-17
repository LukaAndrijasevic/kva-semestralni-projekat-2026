import { UserModel }        from "../models/user.model"
import { ReservationModel } from "../models/reservation.model"
import { ToyModel }         from "../models/toy.model"

const USERS = 'users'
const ACTIVE = 'active'

export class AuthService {
    static getUsers(): UserModel[] {
        const baseUser: UserModel = {
            firstName:      'Luka',
            lastName:       'Andrijasevic',
            email:          'luka@singidunum.com',
            password:       'singidunum123',
            phone:          '0601234567',
            address:        'Danijelova 32',
            city:           'Beograd',
            favoriteType:   'Slagalica',
            reservations:   []
        }

        if (localStorage.getItem(USERS) == null) {
            localStorage.setItem(USERS, JSON.stringify([baseUser]))
        }

        return JSON.parse(localStorage.getItem(USERS)!)
    }

    static login(email: string, password: string) {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === email && u.password === password) {
                localStorage.setItem(ACTIVE, email)
                return true
            }
        }
        
        return false
    }

    static getActiveUser(): UserModel | null {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                return u
            }
        }

        return null
    }

    static logout() {
        localStorage.removeItem(ACTIVE)
    }

    static updateActiveUser(newUserData: UserModel) {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                u.firstName     = newUserData.firstName
                u.lastName      = newUserData.lastName
                u.phone         = newUserData.phone
                u.address       = newUserData.address
                u.city          = newUserData.city
                u.favoriteType  = newUserData.favoriteType
            }
        }

        localStorage.setItem(USERS, JSON.stringify(users))
    }

    static updateActiveUserPassword(newPassword: string) {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                u.password = newPassword
            }
        }

        localStorage.setItem(USERS, JSON.stringify(users))
    }

    static createReservation(reservation: Partial<ReservationModel>, toy: ToyModel) {
        reservation.state       = 'r'
        reservation.toyId       = toy.id
        reservation.name        = toy.name
        reservation.price       = toy.price
        reservation.image       = toy.image
        reservation.rating      = 0
        reservation.createdAt   = new Date().toISOString()

        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                u.reservations.push(reservation as ReservationModel)
            }
        }

        localStorage.setItem(USERS, JSON.stringify(users))
    }

    static getReservationsByState(state: 'r' | 'p' | 'o') {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                return u.reservations.filter((r) => r.state === state)
            }
        }

        return []
    }

    static getAllReservations(): ReservationModel[] {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                return u.reservations
            }
        }

        return []
    }

    static cancelReservation(createdAt: string) {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                for (let r of u.reservations) {
                    if (r.state == 'r' && r.createdAt == createdAt) {
                        r.state = 'o'
                    }
                }
            }
        }

        localStorage.setItem(USERS, JSON.stringify(users))
    }

    static receiveReservations() {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                for (let r of u.reservations) {
                    if (r.state == 'r') {
                        r.state = 'p'
                    }
                }
            }
        }

        localStorage.setItem(USERS, JSON.stringify(users))
    }

    static updateReservationCount(createdAt: string, count: number) {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                for (let r of u.reservations) {
                    if (r.state == 'r' && r.createdAt == createdAt) {
                        r.count = count
                    }
                }
            }
        }

        localStorage.setItem(USERS, JSON.stringify(users))
    }

    static deleteReservation(createdAt: string) {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                u.reservations = u.reservations.filter((r) => r.createdAt !== createdAt)
            }
        }

        localStorage.setItem(USERS, JSON.stringify(users))
    }

    static createUser(user: Partial<UserModel>) {
        const users = this.getUsers()
        user.reservations = []
        users.push(user as UserModel)
        localStorage.setItem(USERS, JSON.stringify(users))
    }

    static existsByEmail(email: string) {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === email) return true
        }

        return false
    }

    static rateReservation(createdAt: string, rating: number){
        const users = this.getUsers()
        for (let u of users){
            if (u.email === localStorage.getItem(ACTIVE)) {
                for (let r of u.reservations) {
                    if (r.state == 'p' && r.createdAt == createdAt) {
                        r.rating = rating
                    }
                }
            }
        }

        localStorage.setItem(USERS, JSON.stringify(users))
    }

    static deleteCanceledReservations() {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                u.reservations = u.reservations.filter((r) => r.state !== 'o')
            }
        }

        localStorage.setItem(USERS, JSON.stringify(users))
    }
}