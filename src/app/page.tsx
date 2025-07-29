import { CardWithFormDemo } from './components/card-demo';
import StatesDemo from './components/states-demo';

export default function Home() {
  return (
    <div>
      <StatesDemo />
      <CardWithFormDemo />
      <div className="text-red mt-3 text-sm">errorMsg</div>
    </div>
  );
}
