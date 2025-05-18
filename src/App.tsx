import { AppShell, Divider, Flex, Stack, Text } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from "@tabler/icons-react";
import About from "./components/About";
import { Helix } from "ldrs/react";
import "ldrs/react/Helix.css";
import Experience from "./components/Experience";
import CircleGradientBackground from "./assets/CircleBg";

export default function MainLayout() {
  return (
    <AppShell
      navbar={{ width: 800, breakpoint: "sm" }}
      className="text-[#EDEADE]">
      <CircleGradientBackground />
      <AppShell.Navbar p="md" withBorder={false} bg="transparent">
        <AppShell.Section className="w-full h-full pl-64 pt-20">
          <Stack className="w-full h-full">
            <Flex direction="column" gap={0}>
              <Text className="" fw={700} fz={40}>
                Hersvin Fred Labastida
              </Text>
              <Text pt={0} className="" fz={20}>
                Frontend Developer
              </Text>
              <Text pt={20} fw={200}>
                I build accessible, pixel-perfect digital experiences for the
                web.
              </Text>
              <Stack className="w-full" mt={120}>
                <Flex
                  gap={10}
                  align="center"
                  className="cursor-pointer w-[40%] hover:w-[60%] hover:text-white">
                  <Divider className="w-1/2" />
                  <Text className="w-11/12">About</Text>
                </Flex>

                <Flex
                  gap={10}
                  align="center"
                  className="cursor-pointer w-[40%] hover:w-[60%]">
                  <Divider className="w-1/2" />
                  <Text className="w-11/12">Experience</Text>
                </Flex>

                <Flex
                  gap={10}
                  align="center"
                  className="cursor-pointer w-[40%] hover:w-[60%]">
                  <Divider className="w-1/2" />
                  <Text className="w-11/12">Projects</Text>
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </AppShell.Section>

        <AppShell.Section className="w-full pb-20 pl-64">
          <Flex direction="row" gap={15}>
            <IconBrandGithubFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
            <IconBrandLinkedinFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
            <IconMailFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
            <IconBrandInstagramFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
            <IconBrandFacebookFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
          </Flex>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main className="scrollbar">
        <Stack className="pt-28 pr-52 pl-48">
          <About />
          <Experience />
        </Stack>
        <Flex
          className="w-full pr-10 pb-5"
          direction="row"
          justify="space-between">
          <Stack></Stack>
          <Helix size="45" speed="2.5" color="blue" />
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}
