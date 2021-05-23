import { UserAddress } from '../models/UserAddress.model'

export const joinAddress = (address: UserAddress): string => {
	return `${address.city} ${address.street} ${address.zipcode} ${address.suite}`
}
