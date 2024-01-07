import { useState, useEffect, useReducer } from "react";
import { Container, Paper, Typography, Grid, Box, Button } from "@mui/material";

import reducer from "./utils/reducer";
import ButtonAppBar from "./components/AppBar";
import getProductsData from "./data/products-data";

const App = () => {
  // const [products, setProducts] = useState([]);
  const initialState = {
    products: [],
    isStockEmpty: false,
    total: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getProductsData(dispatch);
  }, []);

  return (
    <>
      <ButtonAppBar />
      <Container>
        <Grid container spacing={2} marginTop={2}>
          {state.products.map((product) => {
            const { id, title, img, price, amount } = product;
            return (
              <Grid item xs={3} key={id}>
                <Paper elevation={3}>
                  <img src={img} alt="" className="img" />
                  <Box padding={3}>
                    <Typography variant="h6" component="h2">
                      {title}
                    </Typography>
                    <Typography variant="subtitle2" component="h3">
                      ${price}
                    </Typography>
                    <Typography variant="body1" component="h4">
                      Stock : {amount}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch({
                          type: "ORDER_PRODUCT",
                          payload: { id, amount, price },
                        })
                      }
                    >
                      Order Now
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            marginTop: 3,
          }}
        >
          <Paper
            elevation={1}
            sx={{
              padding: 2,
              width: 200,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" component="h3">
              Total : ${state.total}
            </Typography>
          </Paper>
          <Button variant="contained" onClick={() => getProductsData(dispatch)}>
            Clear Cart
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default App;
