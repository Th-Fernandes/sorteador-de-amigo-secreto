import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil";
import { ConfigPage } from ".";

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => jest.fn()
  }
})

describe('root page behaviors', () => {
  test('it should render root page', () => {
    const { container } = render(
      <RecoilRoot>
        <ConfigPage />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot()
  })
})