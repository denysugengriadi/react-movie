"use client"
import { Button, Card, CardText, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from "./MovieCard";
import MovieForms from "./MovieForms";
import MovieSlide from "./MovieSlide";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 style={{ fontSize: "24px", color: "blue"}}>MOVIES LIST</h1>
          <h2 style={{ fontSize: "20px", color: "green"}}>DENY SUGENG RIADI</h2>
          <h3 style={{ fontSize: "16px", color: "red"}}>Kelas Pemrograman Web 2023-2024</h3>
          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              Button as link
            </Button>
            <Button as="a" variant="success">
              Button as link
            </Button>
          </Stack>
        </div>
      </div>

      <MovieForms />
      <MovieSlide />
      <MovieCard />
     
      
    </div>
  );
}
