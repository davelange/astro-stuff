<script lang="ts">
  import type { User } from "../lib/api";

  export let user: User;
</script>

<a
  href={`/users/${user.id}`}
  class="border-indigo-400 border rounded-xl p-2 py-4 w-1/5 text-center"
>
  <img class="w-20 mb-4 mx-auto" src={user.image} alt={user.firstName} />
  <p>{user.firstName} {user.lastName}</p>
</a>
