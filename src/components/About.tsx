import { Stack, Text } from "@mantine/core";

export default function About() {
  return (
    <Stack>
      <Text fw={300}>
        I’m a frontend developer passionate about building accessible,
        pixel-perfect interfaces that blend thoughtful design with reliable
        architectures. Whether developing for the browser or mobile devices, I
        focus on crafting seamless, high-performance user experiences that are
        both intuitive and visually polished.
      </Text>

      <Text fw={300}>
        Currently, I'm a Web and Mobile Developer at{" "}
        <a className="font-medium">IntelliSmart Technology Inc.</a>, where I
        contribute to building and maintaining scalable UI components and
        front-end features. I focus on delivering responsive, accessible, and
        high-performance user experiences aligned with modern web standards.
      </Text>
      <Text fw={300}>
        Over the years, I’ve had the opportunity to work in diverse environments
        — from startups and digital studios to more structured corporate teams.
        These experiences have sharpened my skills in creating flexible
        front-end architectures and collaborating effectively with
        cross-functional teams.
      </Text>
      <Text fw={300}>
        Outside of work, I enjoy watchuing kdramas and anime, reading books,
        sports activity, spending time with my family, and occasionally playing
        mobile games, like Mobile Legends, League of Legends, and Call of Duty.
      </Text>
    </Stack>
  );
}
