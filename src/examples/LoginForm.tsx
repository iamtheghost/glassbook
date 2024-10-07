import { Box, Button, Input, Stack, Text } from "@/components";

export const LoginForm = () => {
  return (
    <Box className="px-8 py-12 h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl">
      <Stack>
        <Text
          as="h2"
          weight={"bold"}
          align={"center"}
          size={"3xl"}
          color="white"
          className="mb-2"
        >
          Login
        </Text>

        <Text
          as="span"
          emphasis={"low"}
          size={"sm"}
          align={"center"}
          color="light"
          className="mb-8"
        >
          Please enter your credentials.
        </Text>

        <Text
          as="label"
          htmlFor="username"
          size={"sm"}
          weight={"medium"}
          color="gray"
          className="mb-1.5"
        >
          Username
        </Text>
        <Input type="text" id="username" className="mb-4" />

        <Text
          as="label"
          htmlFor="password"
          size={"sm"}
          weight={"medium"}
          color="gray"
          className="mb-1.5"
        >
          Password
        </Text>
        <Input id="password" type="password" />

        <Button type="submit" variant={"outline"} size="md" className="mt-10">
          Login
        </Button>
      </Stack>
    </Box>
  );
};
