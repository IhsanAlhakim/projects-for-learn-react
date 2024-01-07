import {
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
} from "@mui/material";
import riverImage from "../assets/river.jpg";
import QuiltedImageList from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import BasicModal from "../components/Modal";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img src={riverImage} alt="" height={325} />
      <QuiltedImageList />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        ratione recusandae, quasi voluptate ipsa sunt hic. Dolorem ab
        repellendus magnam hic, aliquam natus facilis ad cupiditate? Iusto
        maxime labore minus.
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frequently Asked Question
      </Typography>
      <CustomizedAccordions />
    </Box>
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
