import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  models: {
    text: string;
    isEnable: boolean;
  }[];
  setModel: (value: string) => void;
  disabled: boolean;
}

export function SelecUI({ models, setModel, disabled }: Props) {
  const createValueOfText = (text: string) => {
    const value = text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase()
      .split(" ")
      .join("-");
    console.log(value);
    return value;
  };

  return (
    <Select
      disabled={disabled}
      onValueChange={(value) => {
        console.log(value);
        setModel(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Qual você prefere?" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>modelos</SelectLabel>
          {models.map((model) => (
            <SelectItem
              key={createValueOfText(model.text)}
              disabled={!model.isEnable}
              value={createValueOfText(model.text)}
            >
              {model.text}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
