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
import { Button, Card, Text, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function NewProjectForm() {
  const [projectName, setProjectName] = useState("");

  return (
    <DialogRoot size={"lg"}>
      <DialogTrigger asChild>
        <Card.Root
          borderRadius={"5vh"}
          _hover={{ transform: "scale(1.1)", transition: "transform .4s" }}
          backgroundColor={"#101014"}
        >
          <Card.Body gap="2">
            <Text
              width={"30vh"}
              height={"13vh"}
              textAlign={"center"}
              fontSize={"60px"}
            >
              +
            </Text>
          </Card.Body>
        </Card.Root>
      </DialogTrigger>
      <DialogContent backgroundColor={"white"} color={"black"}>
        <DialogHeader>
          <DialogTitle fontSize={"25px"}>Enter your Project name:</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Input
            placeholder="project name"
            fontSize={"17px"}
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          ></Input>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button
              variant="outline"
              color={"black"}
              _hover={{ backgroundColor: "black", color: "white" }}
            >
              Save
            </Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
