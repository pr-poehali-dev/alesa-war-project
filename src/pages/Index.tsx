import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);

  const transformations = [
    {
      name: 'Алеса Дарк',
      form: 'Обычная форма',
      power: 'Скрытая сила воина',
      image: 'https://cdn.poehali.dev/projects/95ec3c93-be03-4ecf-8611-cb6e3d88ef0d/files/7ac787ef-bc87-4fb2-835c-8a18dfab0578.jpg',
      description: 'Алеса в своей обычной форме обладает внутренней силой, которая ждёт своего пробуждения.'
    },
    {
      name: 'Сейлор Бесконечность',
      form: 'Трансформация',
      power: 'Космическая энергия',
      image: 'https://cdn.poehali.dev/projects/95ec3c93-be03-4ecf-8611-cb6e3d88ef0d/files/9b372ef5-607b-4364-8d54-d3811e55c22e.jpg',
      description: 'Превратившись в Сейлор Бесконечность, Алеса получает доступ к безграничной космической силе.'
    }
  ];

  const magicSystem = [
    {
      name: 'Космическая Энергия',
      icon: 'Sparkles',
      description: 'Основная сила вселенной, питающая всех воинов света',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Звёздная Защита',
      icon: 'Shield',
      description: 'Барьер из кристаллизованного звёздного света',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Бесконечная Атака',
      icon: 'Zap',
      description: 'Разрушительная волна космической энергии',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Исцеление Галактик',
      icon: 'Heart',
      description: 'Восстанавливающая сила звёздных систем',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const universe = {
    location: 'Галактика Андромеды',
    era: 'Эра Космических Воинов',
    threat: 'Силы Тьмы угрожают всей вселенной',
    mission: 'Защитить все миры от надвигающегося хаоса'
  };

  return (
    <div className="min-h-screen cosmic-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/95ec3c93-be03-4ecf-8611-cb6e3d88ef0d/files/4372a3fc-f219-44b4-a886-3afd0a26cbf5.jpg')] bg-cover bg-center opacity-30"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `glow-pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text animate-fade-in">
            Алеса Дарк
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Воин Бесконечности
          </p>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            История о девушке, которая обрела силу защищать вселенную от сил тьмы
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть аниме
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-200 hover:bg-purple-900/50 px-8 py-6 text-lg">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            Трансформации
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {transformations.map((form, idx) => (
              <Card 
                key={idx}
                className="bg-card/40 backdrop-blur-md border-purple-500/30 card-glow overflow-hidden group cursor-pointer transition-all hover:scale-105"
                onClick={() => setActiveTransformation(idx)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={form.image} 
                    alt={form.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-300">{form.name}</h3>
                  <p className="text-sm text-pink-400 mb-2 font-semibold">{form.form}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Zap" size={16} className="text-yellow-400" />
                    <span className="text-sm text-blue-300">{form.power}</span>
                  </div>
                  <p className="text-foreground/80">{form.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            Система Магии
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {magicSystem.map((ability, idx) => (
              <Card 
                key={idx}
                className="bg-card/40 backdrop-blur-md border-purple-500/30 card-glow hover:scale-105 transition-transform"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${ability.color} flex items-center justify-center animate-float`}>
                    <Icon name={ability.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-300">{ability.name}</h3>
                  <p className="text-sm text-foreground/70">{ability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            Вселенная
          </h2>
          <Card className="max-w-4xl mx-auto bg-card/40 backdrop-blur-md border-purple-500/30 card-glow">
            <CardContent className="p-8">
              <Tabs defaultValue="location" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6 bg-muted/50">
                  <TabsTrigger value="location">Локация</TabsTrigger>
                  <TabsTrigger value="era">Эпоха</TabsTrigger>
                  <TabsTrigger value="threat">Угроза</TabsTrigger>
                  <TabsTrigger value="mission">Миссия</TabsTrigger>
                </TabsList>
                <TabsContent value="location" className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Globe" size={32} className="text-cyan-400 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-purple-300">Место действия</h3>
                      <p className="text-lg text-foreground/90">{universe.location}</p>
                      <p className="text-sm text-foreground/70 mt-2">
                        Загадочная галактика на краю известной вселенной, где переплетаются реальность и магия.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="era" className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={32} className="text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-purple-300">Временной период</h3>
                      <p className="text-lg text-foreground/90">{universe.era}</p>
                      <p className="text-sm text-foreground/70 mt-2">
                        Время, когда избранные получают силу защищать миры от надвигающейся тьмы.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="threat" className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="AlertTriangle" size={32} className="text-red-400 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-purple-300">Главная угроза</h3>
                      <p className="text-lg text-foreground/90">{universe.threat}</p>
                      <p className="text-sm text-foreground/70 mt-2">
                        Древнее зло пробуждается, стремясь поглотить все звёзды и планеты в вечной тьме.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="mission" className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Target" size={32} className="text-pink-400 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-purple-300">Цель героев</h3>
                      <p className="text-lg text-foreground/90">{universe.mission}</p>
                      <p className="text-sm text-foreground/70 mt-2">
                        Сейлор Бесконечность должна объединить силы всех воинов света для финальной битвы.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <footer className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 glow-text">Присоединяйся к приключению</h3>
            <p className="text-foreground/70 mb-6">
              Следи за новыми сериями и узнавай первым о событиях во вселенной Алесы Дарк
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon" className="border-purple-400 text-purple-300 hover:bg-purple-900/50">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="border-purple-400 text-purple-300 hover:bg-purple-900/50">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="border-purple-400 text-purple-300 hover:bg-purple-900/50">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-500/30">
            <p className="text-sm text-foreground/50">
              © 2024 Алеса Дарк: Сейлор Бесконечности. Все права защищены.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
