import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Battle = () => {
  const [sailorHP, setSailorHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [currentTurn, setCurrentTurn] = useState<'sailor' | 'enemy'>('sailor');
  const [isAttacking, setIsAttacking] = useState(false);
  const [selectedAttack, setSelectedAttack] = useState<string | null>(null);

  const attacks = [
    {
      name: 'Космический Луч',
      icon: 'Zap',
      damage: 25,
      energy: 'Концентрированная энергия звёзд',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Бесконечная Волна',
      icon: 'Waves',
      damage: 35,
      energy: 'Мощная атака из глубин космоса',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Звёздный Щит',
      icon: 'Shield',
      damage: -20,
      energy: 'Восстанавливает здоровье',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      name: 'Галактический Взрыв',
      icon: 'Sparkles',
      damage: 45,
      energy: 'Финальная атака всей мощью',
      color: 'from-pink-500 to-yellow-500'
    }
  ];

  const addLog = (message: string) => {
    setBattleLog(prev => [...prev, message]);
  };

  const performAttack = (attack: typeof attacks[0]) => {
    if (isAttacking || currentTurn !== 'sailor') return;
    
    setIsAttacking(true);
    setSelectedAttack(attack.name);

    setTimeout(() => {
      if (attack.damage < 0) {
        const healing = Math.min(100, sailorHP - attack.damage);
        setSailorHP(healing);
        addLog(`⭐ Сейлор Бесконечность использует ${attack.name}! Восстановлено ${-attack.damage} HP`);
      } else {
        const newEnemyHP = Math.max(0, enemyHP - attack.damage);
        setEnemyHP(newEnemyHP);
        addLog(`💫 Сейлор Бесконечность атакует: ${attack.name}! Урон: ${attack.damage}`);
        
        if (newEnemyHP === 0) {
          addLog('🎉 Победа! Силы Тьмы побеждены!');
          setIsAttacking(false);
          setSelectedAttack(null);
          return;
        }
      }

      setCurrentTurn('enemy');
      setIsAttacking(false);
      setSelectedAttack(null);

      setTimeout(() => {
        enemyAttack();
      }, 1500);
    }, 1000);
  };

  const enemyAttack = () => {
    const damage = Math.floor(Math.random() * 20) + 15;
    const newSailorHP = Math.max(0, sailorHP - damage);
    setSailorHP(newSailorHP);
    addLog(`🌑 Тёмный Повелитель наносит удар! Урон: ${damage}`);
    
    if (newSailorHP === 0) {
      addLog('💔 Поражение... Тьма побеждает');
      return;
    }
    
    setTimeout(() => {
      setCurrentTurn('sailor');
    }, 1000);
  };

  const resetBattle = () => {
    setSailorHP(100);
    setEnemyHP(100);
    setBattleLog([]);
    setCurrentTurn('sailor');
    setIsAttacking(false);
    setSelectedAttack(null);
  };

  useEffect(() => {
    addLog('⚔️ Битва начинается! Сейлор Бесконечность против Тёмного Повелителя!');
  }, []);

  return (
    <div className="min-h-screen cosmic-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/95ec3c93-be03-4ecf-8611-cb6e3d88ef0d/files/4372a3fc-f219-44b4-a886-3afd0a26cbf5.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `glow-pulse ${Math.random() * 2 + 1}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 glow-text animate-fade-in">
          Эпичная Битва
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-6xl mx-auto">
          <Card className={`bg-card/60 backdrop-blur-md border-purple-500/50 card-glow ${currentTurn === 'sailor' ? 'ring-4 ring-purple-400 animate-pulse' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-400 animate-float">
                  <img 
                    src="https://cdn.poehali.dev/projects/95ec3c93-be03-4ecf-8611-cb6e3d88ef0d/files/9b372ef5-607b-4364-8d54-d3811e55c22e.jpg"
                    alt="Сейлор Бесконечность"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-purple-300 mb-2">Сейлор Бесконечность</h2>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Heart" size={16} className="text-pink-400" />
                      <Progress value={sailorHP} className="flex-1 h-3" />
                      <span className="text-sm font-bold text-purple-200">{sailorHP} HP</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {currentTurn === 'sailor' && sailorHP > 0 && enemyHP > 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-purple-300 font-semibold mb-3">Выберите атаку:</p>
                  {attacks.map((attack, idx) => (
                    <Button
                      key={idx}
                      onClick={() => performAttack(attack)}
                      disabled={isAttacking}
                      className={`w-full justify-start bg-gradient-to-r ${attack.color} hover:opacity-90 text-white transition-all ${selectedAttack === attack.name ? 'scale-95' : 'hover:scale-105'}`}
                    >
                      <Icon name={attack.icon as any} size={20} className="mr-3" />
                      <div className="text-left flex-1">
                        <div className="font-bold">{attack.name}</div>
                        <div className="text-xs opacity-90">{attack.energy}</div>
                      </div>
                      <div className="font-bold">
                        {attack.damage < 0 ? `+${-attack.damage}` : attack.damage}
                      </div>
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className={`bg-card/60 backdrop-blur-md border-red-500/50 card-glow ${currentTurn === 'enemy' ? 'ring-4 ring-red-400 animate-pulse' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-500 animate-float">
                  <img 
                    src="https://cdn.poehali.dev/projects/95ec3c93-be03-4ecf-8611-cb6e3d88ef0d/files/7ac787ef-bc87-4fb2-835c-8a18dfab0578.jpg"
                    alt="Тёмный Повелитель"
                    className="w-full h-full object-cover grayscale contrast-150"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-red-400 mb-2">Тёмный Повелитель</h2>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Skull" size={16} className="text-red-400" />
                      <Progress value={enemyHP} className="flex-1 h-3 [&>div]:bg-red-500" />
                      <span className="text-sm font-bold text-red-300">{enemyHP} HP</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-950/30 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-bold text-red-300 mb-2 flex items-center gap-2">
                  <Icon name="Flame" size={20} />
                  Силы Тьмы
                </h3>
                <p className="text-sm text-red-200/70">
                  Древнее зло, стремящееся поглотить весь свет во вселенной. 
                  Обладает разрушительной мощью и беспощаден к своим врагам.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto bg-card/60 backdrop-blur-md border-purple-500/30 card-glow mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-purple-300 flex items-center gap-2">
                <Icon name="ScrollText" size={24} />
                Ход битвы
              </h3>
              {(sailorHP === 0 || enemyHP === 0) && (
                <Button 
                  onClick={resetBattle}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Новая битва
                </Button>
              )}
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {battleLog.map((log, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-muted/30 rounded-lg border border-purple-500/20 text-sm text-foreground/90 animate-fade-in"
                >
                  {log}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {sailorHP === 0 && (
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-red-400 mb-4">Тьма побеждает...</h2>
            <p className="text-lg text-foreground/70">Но надежда всегда возвращается!</p>
          </div>
        )}

        {enemyHP === 0 && (
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl font-bold glow-text mb-4">🎉 Победа Света! 🎉</h2>
            <p className="text-lg text-purple-300">Сейлор Бесконечность спасла вселенную!</p>
          </div>
        )}

        <div className="text-center mt-8">
          <Button 
            variant="outline"
            className="border-purple-400 text-purple-300 hover:bg-purple-900/50"
            onClick={() => window.location.href = '/'}
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Battle;
