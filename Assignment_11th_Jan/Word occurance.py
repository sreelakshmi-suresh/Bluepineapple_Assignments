#f=input("Enter the file name.")
file=open("anne.txt")
count={}
oc=input("Please enter the word that you want to count:")
for line in file:
	words=line.split()
	oc=oc.lower()
	for word in words:
		word=word.lower()
		if word==oc:
			if word in count:
				count[word]+=1
			else:
				count[word]=1
print("The number of times "+ oc +" has occoured is",count)

