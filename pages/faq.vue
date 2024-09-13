<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <!-- This is the FAQ page -->
  <!-- Create a basic FAQ page using PrimeVue Accordion component -->
  <Topbar />
  <div class="pt-10 container max-w-60em mx-auto flex flex-col gap-10">
    <Message severity="success" pt:text:class="flex-grow">
      <div class="flex flex-row items-center justify-between w-full">
        <p class="text-xl font-bold">
          L’alpha publique est désormais ouverte !
        </p>
        <Button severity="success" size="small" as="a" href="/editor" label="Accéder à l’éditeur" />
      </div>
    </Message>

    <Panel>
      <template #header>
        <h1 class="text-2xl font-bold">
          Foire aux questions
        </h1>
      </template>
      <Accordion multiple>
        <AccordionPanel value="0">
          <AccordionHeader>À quoi sert ce projet ?</AccordionHeader>
          <AccordionContent>
            <p>
              BULB permet à n’importe qui de concevoir et créer son propre plan de ligne de transports en commun.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Quand sera-t-il disponible ?</AccordionHeader>
          <AccordionContent>
            <p>
              Pour l’instant il est difficile de donner une date précise. Certaines personnes possèdent dors et déjà un
              accès à l’alpha fermée.
              Le projet devrait ouvrir au public courant août 2024.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Pourra-t-on créer des lignes avec un indices personnalisé ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui, il sera possible de créer n’importe quel indice de ligne et de l’utiliser dans les correspondances
              également. (Exemple le RER F, le métro 25 ou le tramway T26)
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>Pourra-t-on utiliser ses propres pictogrammes ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui. Cette fonctionnalité n’est pas prévue pour la première version, mais elle sera ajoutée dans une mise à
              jour future.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="4">
          <AccordionHeader>Pourra-t-on utiliser une autre charte que celle de la RATP ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui. Pour la première version, il faudra faire avec la charte de la RATP, mais il est prévu d’ajouter à
              minima celles de la SNCF et de IDFM. D’autres chartes pourront également être ajoutées par la suite.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="5">
          <AccordionHeader>Quels modes de transport seront disponibles ?</AccordionHeader>
          <AccordionContent>
            <p>
              Tous. Plus précisément les navettes fluviales, les bus, les téléphériques, les métros, les RER, les
              Transiliens, les tramways, et même les vélos.
            </p>
            <br>
            <p>
              Il est bon de notifier que pour les plans de bus, il n’est pas prévu de générer une carte avec les rues et
              les arrêts, mais uniquement une liste des arrêts.
            </p>
            <br>
            <p>
              Chaque mode de transport pourra avoir un thermomètre de ligne visuellement différent.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="6">
          <AccordionHeader>Peut-on dessiner plusieurs plans ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui, le site propose un système de sauvegarde et de chargement des projets. Vous pouvez commencer à
              travailler sur une ligne, la sauvegarder et recommencer à zéro pour une nouvelle ligne. Une fois la deuxième
              ligne sauvegardée, vous pouvez charger la première pour la modifier à nouveau.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="7">
          <AccordionHeader>Est-il possible d’ajouter des branches et des boucles aux plans ?</AccordionHeader>
          <AccordionContent>
            <p>
              Actuellement ce n’est pas encore possible, mais cette fonctionnalité est déjà prévue et est prioritaire.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="8">
          <AccordionHeader>Dans quels formats peut-on exporter les plans ?</AccordionHeader>
          <AccordionContent>
            <p>
              Actuellement, les plans sont générés au format PNG avec une forte résolution. Je travail actuellement sur un
              rendu SVG, et idéalement PDF.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="9">
          <AccordionHeader>Est-ce que le code sera rendu open-source ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui, une fois la première version terminée, le code source sera rendu public.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="10">
          <AccordionHeader>Puis-je contribuer au projet ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui, lorsque le dépôt GitHub sera ouvert, vous pourrez contribuer en proposant des améliorations, des
              corrections de bugs, ou même en ajoutant des fonctionnalités.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="11">
          <AccordionHeader>C’est payant ?</AccordionHeader>
          <AccordionContent>
            <p>
              Non, ce project est 100% gratuit et le restera pour toujours.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="12">
          <AccordionHeader>J’ai trouvé un bug ou une faute, comment la reporter ?</AccordionHeader>
          <AccordionContent>
            <p>
              Soit en me contactant via <Button link as="a" href="https://x.com/SlamaFR" label="X (anciennement Twitter)" pt:root:class="important-p-0" />, soit en ouvrant un ticket sur le dépôt GitHub quand celui-ci sera ouvert.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="13">
          <AccordionHeader>Avec quelles technologies est fait ce projet ?</AccordionHeader>
          <AccordionContent>
            <p>
              Ce projet est fait avec Nuxt.js 3 et PrimeVue 4.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </Panel>
  </div>
</template>
