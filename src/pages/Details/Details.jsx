import React, { Suspense } from "react";
import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Samsung from "../../components/Samsung/Samsungjoker";

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <Title title="A massive leap forward in resolution & zoom for mobile photography" />
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Samsung />
          </Suspense>
        </Canvas>
      </Content>
    </Container>
  );
}
