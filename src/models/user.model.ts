import { ReservationModel } from "./reservation.model"

export interface UserModel {
    firstName:      string
    lastName:       string
    email:          string
    password:       string
    phone:          string
    address:        string
    city:           string
    favoriteType:   string
    reservations:   ReservationModel[]
}