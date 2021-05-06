import {Geo} from './Geo.model'

export interface UserAddress {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geo
}
