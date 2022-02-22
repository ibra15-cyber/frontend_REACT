fruits = ["apple", "mango", "banana"]

for i in fruits:
    print(i)

for i in range(0, len(fruits),1):
    print(fruits[i])


fruitsObj = {
    "apple": 40,
    "mango": 80,
    "orange": 8
}

for i in fruitsObj:
    print(i)

# for i in range(0,len(fruitsObj),1):
#     print(fruitsObj.i)

for key in fruitsObj:
    print(fruitsObj[key])
