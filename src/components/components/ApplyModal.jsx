import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@chakra-ui/react";

export default function ApplyModal() {
  return (
    <DialogRoot size={"lg"}>
      <DialogTrigger asChild>
        <Button
          fontSize={"20px"}
          backgroundColor={"#497497"}
          color={"white"}
          marginLeft={{ base: "none", md: "3vh" }}
          borderRadius={"10vh"}
          width={{ base: "12vh", md: "17vh" }}
          height={"5vh"}
          opacity={"0.8"}
          _hover={{ opacity: 1.0 }}
        >
          Apply
        </Button>
      </DialogTrigger>
      <DialogContent backgroundColor={"white"} color={"black"}>
        <DialogHeader>
          <DialogTitle fontSize={"25px"}>Apply</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button
              variant="outline"
              color={"black"}
              _hover={{ backgroundColor: "black", color: "white" }}
            >
              Submit
            </Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
