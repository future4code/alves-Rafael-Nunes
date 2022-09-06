import { User } from "./class/user"
import { Customer } from "./class/customer"

const usuario:User = new User(
  "1",
  "Luan@email.com",
  "Luan",
  "1245271",
)

// console.log(usuario.getId(),
//   usuario.getEmail(), 
//   usuario.getName(),
//   usuario.getPassword())

const customer1:Customer = new Customer(
  "5",
  "dudu@email.com",
  "Dudu",
  "password123",
  "MasterCard",
)

console.log(
  customer1.purchaseTotal = 8,
    customer1.getId(),
    customer1.getEmail(),
    customer1.getName(),
    customer1.getPassword(),
    customer1.getCreditCard(),
    customer1.interoduceYourself()
    )