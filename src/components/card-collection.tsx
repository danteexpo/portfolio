import { Card, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

type CardCollectionProps = {
  title: string;
  array: {
    id: number;
    label: string;
    img: string;
    inverts: boolean;
  }[];
};

const CardCollection = ({ title, array }: CardCollectionProps) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold capitalize">{title}</h2>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 place-items-center gap-4">
        {array.map((item) => (
          <Card key={item.id} className="w-full grid place-items-center">
            <CardHeader className="flex flex-col items-center gap-4">
              <Avatar className="rounded-none">
                <AvatarImage
                  src={item.img}
                  alt={item.label}
                  className={item.inverts ? 'dark:invert' : ''}
                />
                <AvatarFallback>
                  {item.label.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{item.label}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CardCollection;
