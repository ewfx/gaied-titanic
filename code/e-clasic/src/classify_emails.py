from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline

# Sample dataset (You should have a dataset to train a better model)
emails = [
    ("Meeting about the new project", "Work"),
    ("Sale on shoes and accessories", "Promotions"),
    ("Your friend tagged you on a photo", "Social"),
    ("Status update: Your Amazon order", "Notifications")
]

# Prepare data for training
texts = [email[0] for email in emails]
labels = [email[1] for email in emails]

# Split data for training and testing
X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.3)

# Create a model pipeline with text vectorization and Naive Bayes classifier
model = make_pipeline(CountVectorizer(), MultinomialNB())

# Train the model
model.fit(X_train, y_train)

# Predict categories
def classify_email(text):
    return model.predict([text])[0]

# Test the classification function
sample_email = "Discount offer on the latest shoes"
category = classify_email(sample_email)
print(f'Category: {category}')
