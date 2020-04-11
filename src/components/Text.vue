// https://vuetifyjs.com/ja/styles/text/
<template>
  <div>
    <h2>テキストの位置</h2>
    <p class="text-justify">
      こんにちは。justifyのクラスをつけるとどうなるの？
    </p>
    <p class="text-left">Left aligned text on all viewport sizes.</p>
    <p class="text-center">Center aligned text on all viewport sizes.</p>
    <p class="text-right">Right aligned text on all viewport sizes.</p>

    <p class="text-sm-left">
      Left aligned text on viewports sized SM (small) or wider.
    </p>
    <p class="text-md-left">
      Left aligned text on viewports sized MD (medium) or wider.
    </p>
    <p class="text-lg-left">
      Left aligned text on viewports sized LG (large) or wider.
    </p>
    <p class="text-xl-left">
      Left aligned text on viewports sized XL (extra-large) or wider.
    </p>

    <h2>折返しとオーバーフロー</h2>
    <div class="text-no-wrap text-example mb-4" style="width: 8rem;">
      This text should overflow the parent.
    </div>

    <!-- Block level -->
    <h3>Block level</h3>
    <div class="row">
      <div class="col-2 text-truncate">
        Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
        tellus.
      </div>
    </div>

    <!-- Inline level -->
    <h3>Inline level</h3>
    <span class="d-inline-block text-truncate" style="max-width: 150px;">
      Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
      tellus.
    </span>

    <h2>テキスト変換</h2>
    <p class="text-lowercase">Lowercased text.</p>
    <p class="text-uppercase">Uppercased text.</p>
    <p class="text-capitalize">CapiTaliZed text.</p>

    <h2>フォントの太さと斜体</h2>
    <p class="font-weight-black">Black text.</p>
    <p class="font-weight-bold">Bold text.</p>
    <p class="font-weight-medium">Medium weight text.</p>
    <p class="font-weight-regular">Normal weight text.</p>
    <p class="font-weight-light">Light weight text.</p>
    <p class="font-weight-thin">Thin weight text.</p>
    <p class="font-italic">Italic text.</p>

    <h2>テキスト不透明度</h2>
    <p class="text--primary">High-emphasis has an opacity of 87%.</p>
    <p class="text--secondary">
      Medium-emphasis text and hint text have opacities of 60%.
    </p>
    <p class="text--disabled">Disabled text has an opacity of 37%.</p>
  </div>
</template>
