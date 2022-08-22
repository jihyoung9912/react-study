import styled, {keyframes} from 'styled-components'

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  &:hover {
    color: teal;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
  //pseudo selector like sass
  ${Title} {
    font-size: 150px;
    &:hover {
      font-size: 250px;
    }
  }
`

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: ${(props) => props.bgColor};
// `
// const Circle = styled(Box)`
//   border-radius: 50%;

// const Btn = styled.button`
//   color: tomato;
// `

// const Input = styled.input.attrs({required: true, minLength:19})`
//   background-color: tomato;
// `

// const anim = keyframes`
// from {
//   color: tomato;
// }
//   to {
//     color: teal;
//   }
// `
//
// const Btn = styled.button`
//   animation: ${anim} 0.5s infinite;
// `


const Styled = () => {
  return(
      <Wrapper>
        {/*<Box bgColor='teal' />*/}
        {/*<Circle bgColor='tomato'/>*/}

        {/*<Btn>Log in</Btn>*/}
        {/*<Btn as='a'>Log in</Btn>*/}

        {/*<Input/>*/}
        {/*<Input/>*/}
        {/*<Input/>*/}
        {/*<Input/>*/}
        {/*<Input/>*/}

        {/*<Btn>Hello</Btn>*/}

        <Title>Hello</Title>
      </Wrapper>
  );
}

export default Styled;