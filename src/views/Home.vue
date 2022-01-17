<template lang="pug">
#home
  b-container
    b-row
      b-col(cols="6")
        b-row
          b-col(cols="12")
            b-table
              template(#empty)
                p.text-center 沒有項目
          b-col(cols="12")
            b-form-group
              b-form-input
            b-btn
              img(src="../../public/img/plus.png", alt="alt")
      b-col(cols="6")
</template>
