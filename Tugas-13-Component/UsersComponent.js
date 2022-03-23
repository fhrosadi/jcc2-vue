export const UsersComponent = {
    template: `
          <div>
              <ul>
                  <li v-for="(user , index) in users" :key="index">
                  {{ user.name }} ||
  
                  <button @click="$emit('edit', index)">Edit</button>
  
                  <button @click="$emit('delete', index)">Delete</button>
                  </li>
              </ul>
          </div>
      `,
    props: ['users'],
}