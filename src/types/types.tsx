
export interface AddressType {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: { lat: string, lng: string }
}

export interface ProfileType {
    zipcode: string
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressType
    phone: string,
    website: string
    company: {
        name: string,
        catchPhrase: string
        bs: string
    }
}