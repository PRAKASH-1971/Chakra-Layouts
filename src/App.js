import './App.css';
import { Grid,GridItem, Heading} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Heading as='h2' size='2xl'>Layout 1</Heading>
      <Grid
  h='200px'
  templateRows={["repeat(3, 1fr)","repeat(2, 1fr)","repeat(1, 1fr)"]} 
  templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} 
  gap={6} w="6xl" m="20px auto"
>
  <GridItem h="150px" rowSpan={[1,1,1]} colSpan={[1,1,1]} bg='tomato' />
  <GridItem h="150px" colSpan={[1,1,1]} rowSpan={[1,1,1]} bg='pink' />
  <GridItem h="150px" colSpan={[1,1,1]} rowSpan={[1,1,1]} bg='teal' />
</Grid>
      <Grid
  h='200px'
  templateRows={["repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} 
  templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} 
  gap={6} w="6xl" m="200px auto"
>
  <GridItem h="250px" rowSpan={[1,2,2]} colSpan={[1,2,2]} bg='tomato' />
  <GridItem h="370px" colSpan={[1,1,1]} rowSpan={[1,3,3]} bg='pink' />
  <GridItem h="100px" colSpan={[1,2,2]} rowSpan={[1,2,2]} bg='teal' />
</Grid>



      {/* <Heading as='h2' size='2xl'>Layout 3</Heading> */}
      {/* <Grid
  h='200px'
  templateRows={["repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} 
  templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} 
  gap={6} w="6xl" m="20px auto"
>
  <GridItem h="250px" rowSpan={[1,2,2]} colSpan={[1,2,2]} bg='tomato' />
  <GridItem h="400px" colSpan={[1,1,1]} rowSpan={[1,3,3]} bg='pink' />
  <GridItem h="100px" colSpan={[1,2,2]} rowSpan={[1,2,2]} bg='teal' />
</Grid> */}
    </div>
  );
}

export default App;
