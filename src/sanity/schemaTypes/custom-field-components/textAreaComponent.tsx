// /components/MyCustomStringInput.jsx
import { Stack, Text, TextInput, TextArea, Box } from "@sanity/ui";

export const textAreaComponent = (props: any) => {
  const { elementProps, value = "" } = props;

  return (
    <Stack space={[2, 2]}>
      <Box>
        <textarea
          {...elementProps}
          rows={4}
          style={{ border: "2px solid black", width: "100%", padding: "4px" }}
        />
      </Box>
      <Text>Characters: {value.length}</Text>
    </Stack>
  );
};
