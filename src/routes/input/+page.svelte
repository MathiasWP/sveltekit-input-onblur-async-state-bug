<script lang="ts">
  let { data } = $props();
</script>

<input
  type="text"
  style:width="200px"
  value={data.state.message}
  onblur={() => {
    data.state.message = "Value updated from blur";
  }}
/>

<p>
  Focus the input, and then go to the previous page with the browser's back
  button.
</p>
<p>
  You should then see a "Uncaught TypeError: Cannot set properties of undefined
  (setting 'message')" error in the console.
</p>
