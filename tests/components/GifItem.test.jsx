import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Test in <GifItem/>', () => {
  
  const title = 'Dragon Ball GIF by Toei Animation';
  const url = 'https://media0.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=6f627e39y19ungcan8ud6bcsg1ummryhpr2xvibmjsft10qo&ep=v1_gifs_search&rid=giphy.gif&ct=g';
  test('Should render a gif item', () => {
    const { container } = render(<GifItem title ={title} url ={url}/>);
    expect(container).toMatchSnapshot();
  })
})

