import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, Typography, Button } from "@mui/material";

export default function HomeUsPage() {
  return (
    <Card
      sx={{
        width: 1519,
        gap: 20,
        height: 650,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <CardActionArea sx={{ textAlign: "center" }}>
          <CardMedia
            sx={{ borderRadius: "10px" }}
            component="img"
            height="350"
            image="https://www.kfc.kg/admin/files/4667.jpeg"
          />
        </CardActionArea>
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          <h2>Оставьте свой отзыв</h2>
        </Typography>
        <br />
        <br />
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          Оцените свой опыт посещения нашего <br /> ресторана и помогите нам
          стать лучше.
        </h4>
        <br />
        <br />
        <Button
          style={{
            marginLeft: 110,
            backgroundColor: "#e4002b",
          }}
        >
          <a style={{ color: "white" }} href="https://www.kfc.kg/feedback">
            {" "}
            ОЦЕНИТЕ НАС
          </a>
        </Button>
      </Box>
      <Box>
        <CardActionArea>
          <CardMedia
            sx={{ borderRadius: "10px" }}
            component="img"
            height="350"
            image="https://www.kfc.kg/admin/files/4687.jpeg"
          />
        </CardActionArea>
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          <h2>Политика </h2>
          <h2>-Конфиденциальности</h2>
        </Typography>
        <br />
        <br />
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          Подпишитесь и следите за новостями, <br /> конкурсами и подарками.
        </h4>
        <br />
        <br />
        <Button
          style={{
            marginLeft: 80,
            backgroundColor: "#e4002b",
          }}
        >
          <a
            style={{ color: "white" }}
            href="https://www.kfc.kg/page/privacy-policy"
          >
            КОНФИДЕНЦИАЛЬНОСТИ
          </a>
        </Button>
      </Box>
      <Box>
        <CardActionArea>
          <CardMedia
            sx={{ borderRadius: "10px" }}
            component="img"
            height="350"
            image="https://www.kfc.kg/admin/files/4701.jpeg"
          />
        </CardActionArea>
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          <h2>11 ингредиентов</h2>
        </Typography>
        <br />
        <br />
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          ЧТО ДЕЛАЕТ НАШИ БЛЮДА ОСОБЕННЫМИ
        </h4>
        <br />
        <br />
        <Button
          style={{
            marginLeft: 120,
            backgroundColor: "#e4002b",
          }}
        >
          <a
            style={{ color: "white" }}
            href="https://www.kfc.kg/eleven-ingredients"
          >
            ОТКРОЙТЕ ДЛЯ СЕБЯ ИХ
          </a>
        </Button>
      </Box>
    </Card>
  );
}
