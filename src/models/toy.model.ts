export interface ReviewModel {
    author:     string
    rating:     number
    comment:    string
    createdAt:  string
}

export interface ToyModel {
    id:             number
    name:           string
    description:    string
    type:           string
    minAge:         number
    targetGroup:    'g' | 'b' | 'a'
    manufacturedAt: string
    price:          number
    image:          string
    reviews:        ReviewModel[]
}