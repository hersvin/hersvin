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
    <AppShell className="text-[#EDEADE]">
      <CircleGradientBackground />
      <AppShell.Main className="h-screen lg:overflow-hidden">
        <Flex className="w-full h-full flex flex-col lg:flex-row">
          <Stack className="w-full h-full">
            <Stack className="w-full h-full pt-20 pl-10">
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
            <Flex
              direction="row"
              gap={15}
              className="w-full lg:pb-20 pl-10 lg:pl-52">
              <IconBrandGithubFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
              <IconBrandLinkedinFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
              <IconMailFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
              <IconBrandInstagramFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
              <IconBrandFacebookFilled className="cursor-pointer hover:scale-125 text-[#e2e8f0] hover:text-blue-400" />
            </Flex>
          </Stack>
          <Stack className="w-full h-full lg:overflow-y-auto pr-2 scrollbar">
            <Stack className="pt-28 lg:pr-52 pl-10">
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
          </Stack>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}
