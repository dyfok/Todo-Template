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
		computed:{
			remaningConut(){
				return this.todos.filter(t => !t.completed).length
			}

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
			},
			handleSaveEditKeydown (todo, index, e) {
			// 0. 注册绑定事件处理函数
			// 1. 获取编辑文本框的数据
			// 2. 数据校验
			//    如果数据是空的，则直接删除该元素
			//    否则保存编辑
			const target = e.target
			const value = target.value.trim()

			// 数据被编辑为空的了，直接删除
			if (!value.length) {
			this.todos.splice(index, 1)
			} else {
			todo.title = value
			this.currentediting = null
			}
			},
			handleCancelEditEsc(){
				this.currentediting = null
			},
			handleClearAllDoneClick(){
				return this.todos = this.todos.filter(t => !t.completed)
			}

		}
	})
})()