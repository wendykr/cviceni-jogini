# Doporučené úložky na doma

Domácí úkol pro kurz JavaScript 2 od Czechitas.

## 2. Jogíni

Vyzkoušíme si rozdělit běžnou stránku do několika komponent.

Vytvořte si repozitář ze šablony [cviceni-jogini](https://github.com/Czechitas-podklady-WEB/cviceni-jogini) se stránkou pro začínající jóga studio. Přepracujte stránku tak, aby byla vytvořena celá v JavaScriptu pomocí komponent.

- V oddělené složce vytvořte komponentu `Header`, která vytvoří hlavičku stránky. Bude očekávat svoje `props` v následujícím formátu.

```javascript
{
  title: 'Jogíni',
  links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
}
```

- V další složce vytvořte komponentu `Intro` vytvářející úvodní text podle následujících props.

```javascript
{
  heading: 'Vítejte mezi Jogíny',
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
}
```
- Stejným způsobem vytvořte komponentu `Pose`, která vytváří HTML pro úvodní obrázek. Komponenta očekává takovéto props.

```javascript
{
  src: 'img/yoga-pose.jpg',
}
```
Na konci tohoto úkolu by měl element `body` v souboru `index.html` vypadat takto.

```html
<body>
  <div id="app" class="app container"></div>
</body>
```
Obsah stránky by měl být vytvořen zcela pomocí komponent.