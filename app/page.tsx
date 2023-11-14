import CityPicker from "@/components/CityPicker";
import { Card, Text, Subtitle, Divider } from "@tremor/react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10">
      <Card className="text-center">
        <Text className="mb-10 text-6xl font-bold">Daily Weather</Text>
        <Subtitle className="text-xl ">
          Powered by Next.js 14, Tailwind CSS, Apollo GrapghQL, Tremor 2.0 and
          more
        </Subtitle>
        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          <CityPicker />
        </Card>
      </Card>
    </main>
  );
}
