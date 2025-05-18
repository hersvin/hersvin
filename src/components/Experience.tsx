import { Box, Chip, Flex, Stack, Text } from "@mantine/core";
import experience from "../assets/experience.json";

export default function Experience() {
  return (
    <Stack className="w-full mt-32" gap={70}>
      {experience.map((item) => (
        <Flex
          key={item.id}
          direction="column"
          justify="space-between"
          className=" p-5 rounded-xl">
          <Flex justify="space-be tween" gap={20}>
            <Text fz={13} c="gray" className="w-1/4">
              {item.date}
            </Text>
            <Box className="w-3/4">
              <Text ta="left" className="w-full">
                {item.position} - {item.company}
              </Text>

              <Flex direction="column" gap={4} mt={20}>
                <Text fw={200} fz={13} ta="left">
                  {item.description}
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex gap={10} mt={20} justify="end">
            {item.stacks.map((item) => (
              <Chip checked={true} color="#89CFF0" variant="light" size="xs">
                {item}
              </Chip>
            ))}
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
}
