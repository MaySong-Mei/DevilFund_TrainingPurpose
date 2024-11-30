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
import { Button, Card, Image } from "@chakra-ui/react";

export default function ProjectModal({ project }) {
  return (
    <DialogRoot size={"lg"}>
      <DialogTrigger asChild>
        <Card.Root
          borderRadius={"5vh"}
          _hover={{ transform: "scale(1.1)", transition: "transform .4s" }}
          backgroundColor={"#101014"}
        >
          <Card.Body gap="2">
            <Image
              src="https://picsum.photos/200/300"
              width={"30vh"}
              height={"13vh"}
            ></Image>
          </Card.Body>
          <Card.Footer justifyContent="center">{project}</Card.Footer>
        </Card.Root>
      </DialogTrigger>
      <DialogContent backgroundColor={"white"} color={"black"}>
        <DialogHeader>
          <DialogTitle fontSize={"25px"}>{project}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Image
            src="https://picsum.photos/200/300"
            width={"50vh"}
            height={"30vh"}
          ></Image>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button
              variant="outline"
              color={"black"}
              _hover={{ backgroundColor: "black", color: "white" }}
            >
              Close
            </Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
