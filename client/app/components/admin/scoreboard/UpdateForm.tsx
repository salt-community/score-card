"use client";
import {
  CardHeader,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Assignment, ScoreRes } from "@/app/types";
import { httpDeleteScoreById } from "@/app/api/request";
import { useRouter } from "next/navigation";

interface ScoreboardProps {
  assignment: Assignment[];
  deleteSearchedScore: Function;
  deleteScore: Function;
  searchedScore: ScoreRes;
}

const UpdateForm = ({
  assignment,
  deleteSearchedScore,
  deleteScore,
  searchedScore,
}: ScoreboardProps) => {
  const router = useRouter();

  const [input, setInput] = useState(searchedScore);

  const inputForm = (el: any) => {
    const { name, value } = el.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const deleteHandler = async () => {
    const response = await httpDeleteScoreById(searchedScore.id);
    if (response.status === 204) {
      deleteScore(searchedScore.id);
      deleteSearchedScore();
    } else {
      throw new Error("delete is canceled!!");
    }
  };

  const submitHandler = async (e: any, input: any) => {
    e.preventDefault();
  };
  return (
    <div className="h-full">
      <CardHeader>
        <h4 className="font-bold text-large">Input Score</h4>
      </CardHeader>

      <form
        id="form"
        onSubmit={(e) => submitHandler(e, input)}
        className="flex flex-col h-full justify-start gap-4"
      >
        <div className=" w-full p-4 flex flex-col gap-4">
          <div className="flex flex-row gap-4 w-full">
            <Select
              name="name"
              label="Assignment :"
              labelPlacement="outside"
              placeholder={searchedScore.assignment}
              onChange={inputForm}
            >
              {assignment.map((assignment: Assignment) => (
                <SelectItem key={assignment.name} value={assignment.name}>
                  {assignment.name}
                </SelectItem>
              ))}
            </Select>
            <Input
              name="score"
              type="number"
              label="Score :"
              labelPlacement="outside"
              placeholder="Enter score"
              color="default"
              step={"1"}
              onChange={inputForm}
              className="w-72"
              defaultValue={searchedScore.score.toString()}
            />
          </div>
          <Textarea
            name="description"
            label="Description :"
            labelPlacement="outside"
            placeholder="Enter score description"
            onChange={inputForm}
            defaultValue={searchedScore.description}
          />
        </div>
        <div className="flex flex-row justify-center gap-20">
          <Button
            className="bg-red-500 hover:bg-accent text-white font-bold py-2 px-4 rounded"
            placeholder={undefined}
            type="submit"
            onClick={() => deleteHandler()}
          >
            Delete
          </Button>
          <Button
            className="bg-blue-500 hover:bg-accent text-white font-bold py-2 px-4 rounded"
            placeholder={undefined}
            onClick={() => deleteSearchedScore()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
