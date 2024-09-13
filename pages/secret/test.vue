<script setup>
</script>

<template>
  <div class="bg-white px-10 pt-30 flex flex-row gap-30">
    <StopLabel
      place-name="Nom de la ville"
      value="Value"
      subtitle="Subtitle"
    />
    <StopLabel
      place-name="Nom de la ville"
      value="Nom de l’arrêt"
      subtitle="Sous-titre"
      terminus
    />
    <StopLabel
      place-name="Nom de la ville"
      value="Nom de l’arrêt"
      subtitle="Sous-titre"
      interest-point
    />
    <StopLabel
      place-name="Nom de la ville"
      value="Nom de l’arrêt"
      subtitle="Sous-titre"
      interest-point
      terminus
    />
    <StopLabel
      value="Créteil – L’Échat"
      subtitle="Hôpital Henri Mondor"
    />
    <StopLabel
      value="Les Agnettes"
      place-name="Asnières – Gennevilliers"
    />
    <StopLabel
      value="Les Courtilles"
      place-name="Asnières – Gennevilliers"
      terminus
    />
  </div>

  <div class="bg-white px-10 py-30 flex flex-row gap-50 font-[Parisine_Std] font-bold">
    <StopLabel
      value="La Défense"
      subtitle="Grande Arche"
      interest-point
    />
    <StopLabel
      value="La Défense"
      subtitle="Grande Arche"
      interest-point
      terminus
    />
    <StopLabel
      :value="'Charles de Gaule\nÉtoile'"
      terminus
    />
    <StopLabel
      :value="'Marne-la-Vallée\nChessy'"
      subtitle="Parcs Disneyland"
      interest-point
      terminus
    />
    <StopLabel
      :value="'École Vétérinaire\nde Maisons-Alfort'"
    />
    <StopLabel
      value="Pointe du Lac"
      place-name="Créteil"
      terminus
    />
  </div>
</template>
