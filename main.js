var data = {
	services: [
		{
			id: 1,
			head: null,
			name: 'Проф.осмотр',
			node: 0,
			price: 100.0,
			sorthead: 20,
		},
		{
			id: 2,
			head: null,
			name: 'Хирургия',
			node: 1,
			price: 0.0,
			sorthead: 10,
		},
		{
			id: 3,
			head: 2,
			name: 'Удаление зубов',
			node: 1,
			price: 0.0,
			sorthead: 10,
		},
		{
			id: 4,
			head: 3,
			name: 'Удаление зуба',
			node: 0,
			price: 800.0,
			sorthead: 10,
		},
		{
			id: 5,
			head: 3,
			name: 'Удаление 8ого зуба',
			node: 0,
			price: 1000.0,
			sorthead: 30,
		},
		{
			id: 6,
			head: 3,
			name: 'Удаление осколка зуба',
			node: 0,
			price: 2000.0,
			sorthead: 20,
		},
		{
			id: 7,
			head: 2,
			name: 'Хирургические вмешательство',
			node: 0,
			price: 200.0,
			sorthead: 10,
		},
		{
			id: 8,
			head: 2,
			name: 'Имплантация зубов',
			node: 1,
			price: 0.0,
			sorthead: 20,
		},
		{
			id: 9,
			head: 8,
			name: 'Коронка',
			node: 0,
			price: 3000.0,
			sorthead: 10,
		},
		{
			id: 10,
			head: 8,
			name: 'Слепок челюсти',
			node: 0,
			price: 500.0,
			sorthead: 20,
		},
	],
}

function buildDirectoryTree(data, parentId = null) {
	const directoryList = document.createElement('ul')

	const children = data.filter((item) => item.head === parentId)
	children.sort((a, b) => a.sorthead - b.sorthead)

	for (const child of children) {
		const listItem = document.createElement('li')
		const title = document.createElement('div')
		const name = document.createElement('span')

		listItem.classList.add('parent')
		directoryList.classList.add('tree')

		name.textContent = child.name
		title.append(name)
		listItem.append(title)

		if (child.node === 1) {
			const subDirectory = buildDirectoryTree(data, child.id)
			listItem.append(subDirectory)
			subDirectory.classList.add('collapsed')
			title.addEventListener('click', () => {
				subDirectory.classList.toggle('collapsed')
			})
		} else {
			const price = document.createElement('span')
			price.textContent = `Цена: ${child.price} руб.`
			title.append(price)
		}

		directoryList.append(listItem)
	}

	return directoryList
}

const directoryTree = buildDirectoryTree(data.services)
document.body.append(directoryTree)
