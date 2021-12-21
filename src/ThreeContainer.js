import React, { useRef, useEffect, useState } from "react";

// Three imports
import { Physics } from "@react-three/cannon";
import { ContactShadows, MapControls, softShadows } from "@react-three/drei";
import { Sky, Cloud } from "@react-three/drei";

// import Model2 from "./Followpathdemo";

// import Model from "./Compressed_newcollege";
import Model from "./Compressed_withgatelogo";

// Styles
import "./ThreeContainer.scss";

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import CameraControls from "camera-controls";

CameraControls.install({ THREE });
softShadows({
  frustum: 3.75, // Frustum width (default: 3.75) must be a float
  size: 0.005, // World size (default: 0.005) must be a float
  near: 9.5, // Near plane (default: 9.5) must be a float
  samples: 17, // Samples (default: 17) must be a int
  rings: 11, // Rings (default: 11) must be a int
});

function Controls() {
  const camera = useThree((state) => state.camera);
  const controlsRef = useRef();

  // useEffect(() => {
  //   var minPan = new THREE.Vector3(-100, -2, -300);
  //   var maxPan = new THREE.Vector3(500, 2, 400);
  //   var _v = new THREE.Vector3();
  //   controlsRef.current.addEventListener("change", function () {
  //     _v.copy(this.target);
  //     this.target.clamp(minPan, maxPan);
  //     _v.sub(this.target);
  //     camera.position.sub(_v);
  //   });
  // }, []);

  useFrame(() => console.log("Position: ", camera));

  return (
    <MapControls
      ref={controlsRef}
      enableZoom={false}
      enableRotate={true}
      maxPolarAngle={1.5}
      minPolarAngle={0.9}
      maxDistance={300}
      // For College Entrance
      // target={[0, 10, 45]}

      // For Main Gate
      target={[290, 0, 320]}
    />
  );
}

// function Box({ history }) {
//   // const [ref, api] = useBox(() => ({ mass: 1, position: [200, 2, 0] }));
//   // const history = useHistory();
//   // console.log("history in box", history);
//   const boxRef = useRef(null);

//   let canGoForward = true;
//   let comeback = true;
//   let allowBack = true;
//   let secondLeft = false;
//   let secondReverse = false;
//   let mandirRight = false;
//   let back2normal = false;
//   useFrame(() => {
//     console.log("Box: ", boxRef.current.position);
//     let z_cord = boxRef.current.position.z;
//     let x_cord = boxRef.current.position.x;

//     if (z_cord < 230 && z_cord >= 60 && allowBack && !secondReverse) {
//       boxRef.current.position.z += 0.5;
//       console.log("Straight");
//     }

//     if (z_cord >= 230 && z_cord <= 330 && comeback) {
//       boxRef.current.position.x -= 0.2;
//       boxRef.current.position.z += 0.5;
//       console.log("Slant");
//     }

//     if (z_cord > 328 && x_cord > 160) {
//       comeback = false;
//       boxRef.current.position.x -= 0.5;
//       // boxRef.current.position.z -= 0.7;
//       console.log("left");
//       // canGoForward = false;
//     }

//     if (x_cord <= 160 && x_cord > -90 && !secondLeft) {
//       console.log("Left Up");
//       boxRef.current.position.z -= 0.2;
//       boxRef.current.position.x -= 0.5;
//     }

//     if (x_cord <= -90 && z_cord > 140) {
//       console.log("reverse");
//       allowBack = false;
//       secondLeft = true;
//       boxRef.current.position.z -= 0.5;
//     }
//     if (z_cord <= 140 && x_cord < 105 && secondLeft) {
//       console.log("right");
//       boxRef.current.position.x += 0.5;
//       if (x_cord > 104) secondReverse = true;
//     }

//     if (z_cord < 260 && secondReverse && z_cord > 10 && !back2normal) {
//       console.log("second reverse");
//       boxRef.current.position.z -= 0.6;
//       if (z_cord > 9) mandirRight = true;
//     }

//     if (z_cord <= 10 && mandirRight && x_cord <= 240 && !back2normal) {
//       console.log("mandir right");
//       boxRef.current.position.x += 0.5;
//       if (x_cord > 239) back2normal = true;
//     }

//     if (x_cord >= 240 && z_cord <= 60 && back2normal) {
//       boxRef.current.position.x -= 0.5;
//       boxRef.current.position.z += 0.5;
//       console.log("back to normal");
//     }

//     // if (z_cord < 60) {
//     //   canGoForward = true;
//     // }

//     // if (canGoForward) {
//     //   boxRef.current.position.z += 0.5;
//     // } else {
//     //   boxRef.current.position.z -= 0.5;
//     // }
//   });

//   return (
//     <mesh
//       onClick={() => {
//         // api.velocity.set(0, 2, 0);
//         // console.log("dard", history);
//         history.push("/events/vsm");
//       }}
//       ref={boxRef}
//       position={[260, 1, 60]}
//       scale={[10, 10, 10]}
//       castShadow
//     >
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// }

const ThreeContainer = ({ loading, setLoading }) => {
  // College Entrance
  // const desktopPosition = [
  //   -123.87768535864012, 25.090302017270139, 40.82892664461246,
  // ];
  // const mobilePosition = [
  //   -205.30563025632847, 37.090302017270098, 38.437748336675426,
  // ];
  // {x: , y: , z: }
  const desktopPosition = [
    282.32480397411064, 125.288937294745935, 936.8799539427686,
  ];
  // const mobilePosition = [
  //   -205.30563025632847, 37.090302017270098, 38.437748336675426,
  // ];
  return (
    <>
      <div className="canvaDiv canvaAfter">
        <Canvas
          shadowMap
          frameloop="demand"
          // mode="concurrent"

          shadows
          camera={{
            fov: 60,
            position:
              // window.innerWidth > 720 ? desktopPosition : mobilePosition,
              desktopPosition,

            // lookAt: [0, 0, 30],
          }}
          // onCreated={({ camera }) => {
          //   camera.lookAt(
          //     -103.87768535864012,
          //     25.090302017270139,
          //     100.82892664461246
          //   );
          //   camera.rotation.z = Math.PI;
          // }}
        >
          {/*   // ctor3 {x: , y: , z:  */}
          <color attach="background" args={["#89253e", "#3a6186"]} />
          {/* <directionalLight position={[1, 1, 1]} color="#ad0071" />
          <directionalLight position={[-1, -1, -1]} color="#ffd738" /> */}
          {/* <fog attach="fog" args={["#ff6161", 0.002, 1000]} /> */}

          {/* <ambientLight intensity={1} color={"#ffe692"} /> */}
          {/*  /////////////////////////// EVENTS //////////////////////////////////////*/}
          {/* IPL  */}
          {/* <pointLight
            position={[165, 50, 100]}
            distance={50}
            intensity={3}
            color={"#ffe692"}
          /> */}
          {/* IPL  */}
          {/* VSM */}
          {/* <pointLight
            position={[45, 10, 220]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* VSM */}

          {/* OCL  */}
          {/* <pointLight
            intensity={1}
            distance={40}
            position={[170, 1, -20]}
            color={"red"}
          /> */}
          {/* OCL  */}

          {/* Sabhagruha */}
          <pointLight
            intensity={1}
            position={[-60, 4, 40]}
            distance={40}
            color={"#ffe692"}
          />
          <pointLight
            intensity={10}
            position={[47, 10, 40]}
            distance={20}
            color={"#ffe692"}
          />
          {/* Sabhagruha */}

          {/*  /////////////////////////// EVENTS //////////////////////////////////////*/}
          {/* Street Lights */}

          {/* College Right */}
          {/* <pointLight
            intensity={2}
            position={[60, 10, -70]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[10, 10, -70]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-40, 10, -70]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* College Right */}

          {/* College Front */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, -60]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, -10]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, 40]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, 90]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* College Front */}

          {/* College Left */}
          {/* <pointLight
            intensity={2}
            position={[60, 10, 140]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[10, 10, 140]}
            distance={100}
            color={"#ffe692"}
          />
          <pointLight
            intensity={2}
            position={[-40, 10, 140]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[-90, 10, 140]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* College Left */}

          {/* Cabin and gate */}
          {/* <pointLight
            intensity={3}
            position={[240, 10, 430]}
            distance={80}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[300, 10, 430]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[240, 10, 480]}
            distance={80}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[300, 10, 480]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[240, 10, 530]}
            distance={80}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={3}
            position={[300, 10, 530]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* Cabin and gate */}

          {/** College Building behind concert */}

          {/* <pointLight
            intensity={2}
            position={[100, 20, -150]}
            distance={50}
            color={"#ffe692"}
          /> */}

          {/** Mandir Right Lamps */}
          {/** test wala */}
          {/* <pointLight
            intensity={2}
            position={[300, 20, -50]}
            distance={100}
            color={"red"}
          /> */}

          {/* Mandir Right Concert*/}

          {/* <pointLight
            intensity={2}
            position={[300, 20, -150]}
            distance={50}
            color={"red"}
          /> */}

          {/**test wala */}
          {/* <pointLight
            intensity={2}
            position={[300, 20, -150]}
            distance={100}
            color={"red"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[300, 20, -170]}
            distance={50}
            color={"red"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[270, 20, -170]}
            distance={100}
            color={"red"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[280, 20, -150]}
            distance={50}
            color={"blue"}
          /> */}
          {/** Test wala */}
          {/* <pointLight
            intensity={2}
            position={[280, 20, -150]}
            distance={100}
            color={"blue"}
          /> */}
          {}
          {/* <pointLight
            intensity={2}
            position={[280, 20, -170]}
            distance={50}
            color={"blue"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[280, 20, -150]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/**test wala */}
          {/* <pointLight
            intensity={4}
            position={[-30, 20, -150]}
            distance={150}
            color={"#ffe692"}
          />

          <pointLight
            intensity={5}
            position={[80, 20, -260]}
            distance={100}
            color={"lightgreen"}
          /> */}

          {}

          {/* Mandir Straight */}
          {/* <pointLight
            intensity={2}
            position={[260, 10, 70]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[260, 10, 120]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[260, 10, 170]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[260, 10, 220]}
            distance={100}
            color={"#ffe692"}
          /> */}

          {/* <pointLight
            intensity={2}
            position={[230, 10, 270]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[230, 10, 320]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[230, 10, 370]}
            distance={80}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[200, 10, 370]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* Mandir Straight */}

          {/* Mandir Left */}
          {/* <pointLight
            intensity={2}
            position={[205, 10, 20]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[165, 10, 20]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[125, 10, 20]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* Mandir Left */}

          {/* College Straight Line */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, -30]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 20]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 70]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 120]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 170]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[105, 10, 220]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[135, 10, 240]}
            distance={100}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[165, 10, 260]}
            distance={50}
            color={"#ffe692"}
          /> */}
          {/* <pointLight
            intensity={2}
            position={[195, 10, 280]}
            distance={100}
            color={"#ffe692"}
          /> */}

          {/** Test lights */}
          <pointLight
            castShadow
            intensity={5}
            position={[25, 10, 225]}
            distance={250}
            color={"#ffe692"}
          />

          <pointLight
            castShadow
            intensity={4}
            position={[170, 10, 125]}
            distance={150}
            color={"#0357a6"}
          />

          <pointLight
            castShadow
            intensity={4}
            position={[305, 10, 205]}
            distance={150}
            color={"#ffe692"}
          />

          <pointLight
            castShadow
            intensity={5}
            position={[305, 10, 505]}
            distance={250}
            color={"#0357a6"}
          />

          <pointLight
            castShadow
            intensity={4}
            position={[190, 10, -10]}
            distance={150}
            color={"#ffe692"}
          />

          <pointLight
            castShadow
            intensity={9}
            position={[190, 400, -10]}
            distance={700}
            color={"#0357a6"}
          />

          {/* College Straight Line */}
          {/* Street Lights */}

          {/* <RectArealightWithHelper /> */}
          <Physics>
            <Model setLoading={setLoading} />
            {/* <Box /> */}
            <ContactShadows
              opacity={1}
              width={1}
              height={1}
              blur={1} // Amount of blur (default=1)
              far={10} // Focal distance (default=10)
              resolution={256} // Rendertarget resolution (default=256)
            />
            {/* <Model2 /> */}

            <Controls />
          </Physics>
        </Canvas>
      </div>
    </>
  );
};

export default ThreeContainer;
