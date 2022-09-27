import { PostBusiness } from './../src/business/PostBusiness';
import { ICreatePostInputDTO } from './../src/models/Post';
import { IdGeneratorMock } from './mocks/IdGeneratorMock';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { PostDatabaseMock } from './mocks/PostDatabaseMock';
import { IGetPostsInputDTO } from './../src/models/Post';
import { Post } from './../src/models/Post';

describe("Test PostBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("o post sera gerado em caso de sucesso", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "post criado, passou no teste"
    }
    const result = await postBusiness.createPost(input)
    expect(result.message).toBe("Post criado com sucesso")
    expect(result.post.getId()).toBe("id-mock")
  }),

  test("retornará todos os post existentes", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal"
    }
    const result = await postBusiness.getPosts(input)
    expect(result.posts.length).toBe(3)
    expect(result.posts[0]).toBeInstanceOf(Post)
  })
})

