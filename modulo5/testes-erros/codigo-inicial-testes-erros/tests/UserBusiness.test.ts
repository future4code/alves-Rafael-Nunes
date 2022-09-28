import { UserBusiness } from "../src/business/UserBusiness"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    
    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Um token é retornado quando o login é bem-sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

        test("teste de erro signup", async () => {
          
          try{
            const input:any = {
              name: true,
              email:"true@gmail.com",
              password:"32"
            } as any


            await userBusiness.signup(input)
          }catch(error:any){
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'name' inválido")
          }
        })

        test("teste de erro para senha incorreta", async () => {
    
            try {
                const input: ILoginInputDTO = {
                    email: "usermock@gmail.com",
                    password: "hash-mockado"
                }
    
                await userBusiness.login(input)
    
            } catch (error: any) {
                    expect(error.statusCode).toBe(401)
                    expect(error.message).toBe("Password incorreto")
                
            }
        })
      })
