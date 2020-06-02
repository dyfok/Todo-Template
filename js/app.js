;(function(){
	const todos = [
	{
		id:1,
		title:'吃饭',
		completed:true
	},
	{
		id:2,
		title:'上课',
		completed:true
	},
	{
		id:3,
		title:'上班',
		completed:true
	},
	]
	new Vue({
		el:"#app",
		data:{
			'title':'TOdos',
			todos,
			currentediting:null
		},
		methods:{

			handleNewTodoKeyDown(e){
				const value = e.target.value.trim()
				if (!value.length){
					return
				}
				const todos = this.todos
				todos.push({
					id: todos.length ? todos[todos.length -1].id +1 : 1,
					title: value,
					completed:false
				})
				e.target.value = ''
			},

			handleToggleAllChange(e){
				const checked = e.target.checked
				this.todos.forEach(item =>{
					item.completed = checked
				})
			},

			handleToggleDestroy(index){
				this.todos.splice(index,1)
			},

			handleGetEditingDblclick(item){
				 this.currentediting = item
			}
		}
	})
})()