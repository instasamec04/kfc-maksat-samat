import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function AboutUs() {
  return (
    <Box sx={{ marginTop: "170px" }}>
      <Box>
        <Box id="about1">
          <span id="line">
            <div id="vl"></div>
          </span>
          <span id="flag">1930</span>
          <span id="flag2">1940</span>
          <span id="flag3">1952</span>
          <span id="flag4">2022</span>
          <Box sx={{ width: "1060px" }}>
            <Typography
              variant="h5"
              sx={{
                height: "23px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ОРИГИНАЛЬНЫЙ РЕЦЕПТ ИЗ КУРИЦЫ, ПОКОРИВШИЙ МИР
            </Typography>
            <Typography
              sx={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              KFC был основан в Америке Харландом Сандерсом в возрасте 62 лет и
              после того, как он ранее пытался выполнять различные работы:
              капитаном на пароме, страховщиком, продавцом в магазине
              осветительных приборов, юристом, продавцом шин и даже
              акушером-любителем! Он потерпел неудачу во всех этих сферах, так
              сильно, что даже пытался покончить жизнь самоубийством!
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box id="about2" sx={{ height: 845, width: 1420, display: "flex" }}>
        <Box id="abcard1">
          <Card
            id="ancard"
            sx={{
              height: "639px",
              width: "567px",
              marginTop: "160px",
              boxShadow: "10 10 10 black",
            }}
          >
            <CardMedia
              sx={{ height: 390, width: 583 }}
              image="https://www.kfc.kg/admin/files/4694.jpeg"
            />
            <CardActions>
              <Button sx={{ color: "red" }} size="small">
                Все началось на заправочной станции.
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Все это продолжалось до 1930 года. Затем он взял в аренду
                заправочную станцию, на которой был ресторан. Там он начал
                подавать путешественникам курицу, которую приготовил сам по
                рецепту, который знал только он!
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box id="abcard2">
          <Card
            id="ancard"
            sx={{
              height: "639px",
              width: "567px",
              marginTop: "160px",
              boxShadow: "10 10 10 black",
            }}
          >
            <CardMedia
              sx={{ height: 390, width: 583 }}
              image="https://www.kfc.kg/admin/files/4639.jpeg"
            />
            <CardActions>
              <Button sx={{ color: "red" }} size="small">
                Волшебное число 11
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Десять лет спустя, в 1940 году, он усовершенствовал свой рецепт.
                В нем было 11 специй и трав, часть которых была выгравирована за
                дверью кухни той заправки.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box id="about3" sx={{ height: 845, width: 1420, display: "flex" }}>
        <Box id="abcard1">
          <Card
            id="ancard"
            sx={{
              height: "639px",
              width: "567px",
              marginTop: "160px",
              boxShadow: "10 10 10 black",
            }}
          >
            <CardMedia
              sx={{ height: 390, width: 583 }}
              image="https://www.kfc.kg/admin/files/4665.jpeg"
              title="green iguana"
            />
            <CardActions>
              <Button sx={{ color: "red" }} size="small">
                ... золотой секретный рецепт
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Первый KFC открылся в 1952 году, а в 1955 году, запатентовав
                уникальный рецепт, Сандерс провел марафон по сбору средств на
                развитие бренда. Он провел более 1000 встреч и, наконец, в 1964
                году, в возрасте 74 лет, продал KFC инвесторам за 2 миллиона
                долларов!
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box id="abcard2">
          <Card
            id="ancard"
            sx={{
              height: "639px",
              width: "567px",
              marginTop: "160px",
              boxShadow: "10 10 10 black",
            }}
          >
            <CardMedia
              sx={{ height: 390, width: 583 }}
              image="https://www.kfc.kg/admin/files/4640.jpeg"
              title="green iguana"
            />
            <CardActions>
              <Button sx={{ color: "red" }} size="small">
                KFC сегодня.
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Более 21 000 ресторанов KFC работают в более чем в 130 странах
                мира В Кыргызстане KFC был открыт 27 июня 2016 года. Сейчас
                открыто уже 14 ресторанов.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
