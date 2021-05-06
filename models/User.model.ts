import {UserAddress} from './UserAddress.model'
import {Company} from './Company.model'

export interface User {
	id: number
	name: string
	username: string
	email: string
	address: UserAddress
	phone: string
	website: string
	company: Company
}
