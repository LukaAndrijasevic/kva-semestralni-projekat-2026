export interface ReservationModel {
    toyId:      number
    name:       string
    price:      number
    image:      string
    count:      number
    state:      'r' | 'p' | 'o'
    rating:     number
    createdAt:  string
}