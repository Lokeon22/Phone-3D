import React, { Fragment } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/samsungjoker.gltf");
  return (
    <Fragment>
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.72}>
            <group
              position={[-0.11, -3.08, 0.44]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[-0.49, 0.49, 0.49]}
            >
              <mesh
                geometry={nodes.Logo_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <group
              position={[1.74, 0.43, 0.2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-0.04, 0.03, 0.03]}
            >
              <mesh
                geometry={nodes.PowerButton_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <group
              position={[1.74, 1.32, 0.2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-0.04, 0.03, 0.03]}
            >
              <mesh
                geometry={nodes.VolumeButton__0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <mesh
              geometry={nodes.ScreenBezel_0.geometry}
              material={materials.ScreenBezel}
            />
            <mesh
              geometry={nodes.Screen_0.geometry}
              material={materials.Screen}
            />
            <mesh geometry={nodes.Back_0.geometry} material={materials.Back} />
            <group position={[0.98, 2.04, 0.51]} scale={[-0.26, 0.26, 0.26]}>
              <group
                position={[3.99, 4.51, -1.76]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.73, 0.73, 0.73]}
              >
                <group
                  position={[0, 0, 0.12]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.16, 0.16, 0.09]}
                >
                  <mesh
                    geometry={nodes.LensFC_0.geometry}
                    material={materials.Lens}
                  />
                </group>
                <mesh
                  geometry={nodes.FrontCamera_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.FrontCamera_1.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  geometry={nodes.FrontCamera_2.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[0, 0, -0.27]} scale={[0.32, 0.32, 0.22]}>
                <mesh
                  geometry={nodes.Lens1_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  geometry={nodes.Lens1_1.geometry}
                  material={materials.Lens}
                />
              </group>
              <group position={[0, -2.86, 0]}>
                <mesh
                  geometry={nodes.Camera3_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Camera3_1.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  geometry={nodes.Camera3_2.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  geometry={nodes.Camera3_3.geometry}
                  material={materials.Glass}
                />
                <mesh
                  geometry={nodes.Camera3_4.geometry}
                  material={materials["Lens.001"]}
                />
              </group>
              <group position={[2.61, 1.42, 0]} scale={0.35}>
                <mesh
                  geometry={nodes.Flashh_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Flashh_1.geometry}
                  material={materials.Glass}
                />
                <mesh
                  geometry={nodes.Flashh_2.geometry}
                  material={materials.Flash}
                />
              </group>
              <group position={[2.61, 2.84, 0]} scale={0.68}>
                <mesh
                  geometry={nodes.Sensor_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Sensor_1.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  geometry={nodes.Sensor_2.geometry}
                  material={materials.Glass}
                />
                <mesh
                  geometry={nodes.Sensor_3.geometry}
                  material={materials.material}
                />
              </group>
              <group position={[2.61, -0.07, 0]} scale={0.68}>
                <group position={[0, 0.01, -0.28]} scale={[0.42, 0.42, 0.23]}>
                  <mesh
                    geometry={nodes.Lens4_0.geometry}
                    material={materials.Camera2}
                  />
                  <mesh
                    geometry={nodes.Lens4_1.geometry}
                    material={materials.Lens}
                  />
                </group>
                <mesh
                  geometry={nodes.Camera4_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Camera4_1.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  geometry={nodes.Camera4_2.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  geometry={nodes.Camera4_3.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[0, 2.78, 0]}>
                <group position={[0, 0, -0.27]} scale={[0.5, 0.5, 0.21]}>
                  <mesh
                    geometry={nodes.Lens2_0.geometry}
                    material={materials.Lens}
                  />
                </group>
                <mesh
                  geometry={nodes.Camera2_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  geometry={nodes.Camera2_1.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  geometry={nodes.Camera2_2.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  geometry={nodes.Camera2_3.geometry}
                  material={materials.Glass}
                />
              </group>
              <mesh
                geometry={nodes.Camera1_0.geometry}
                material={materials.BodyFrame}
              />
              <mesh
                geometry={nodes.Camera1_1.geometry}
                material={materials.Camera2}
              />
              <mesh
                geometry={nodes.Camera1_2.geometry}
                material={materials.Camera3}
              />
              <mesh
                geometry={nodes.Camera1_3.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-1.01, -0.44, 0.04]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.CamModule_0.geometry}
                material={materials.CameraModule}
              />
            </group>
            <group position={[-1.01, -0.44, 0]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.CamModuleFrame_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <mesh
              geometry={nodes.S21ULTRA_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              geometry={nodes.S21ULTRA_1.geometry}
              material={materials.Chrome}
            />
            <mesh
              geometry={nodes.S21ULTRA_2.geometry}
              material={materials.Speaker}
            />
            <mesh
              geometry={nodes.S21ULTRA_3.geometry}
              material={materials.Antennas}
            />
          </group>
        </group>
      </group>
    </Fragment>
  );
}

useGLTF.preload("/samsungjoker.gltf");
