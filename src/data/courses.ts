import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    id: 'ml-fundamentals',
    title: 'Machine Learning Fundamentals',
    description: 'Learn the core concepts of machine learning including supervised and unsupervised learning, neural networks, and practical applications.',
    category: 'Machine Learning',
    duration: '12 weeks',
    level: 'Beginner',
    lectures: [
      {
        id: 'ml-intro',
        title: 'Introduction to Machine Learning',
        duration: '45 min',
        summary: 'Overview of machine learning, types of learning algorithms, and real-world applications. We\'ll explore the difference between supervised, unsupervised, and reinforcement learning.',
        textbookReferences: [
          {
            id: 'ref1',
            title: 'Pattern Recognition and Machine Learning',
            author: 'Christopher Bishop',
            chapter: 'Chapter 1',
            pages: '1-25',
            isbn: '978-0387310732'
          },
          {
            id: 'ref2',
            title: 'The Elements of Statistical Learning',
            author: 'Hastie, Tibshirani, Friedman',
            chapter: 'Chapter 1',
            pages: '1-18'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid1',
            title: 'Machine Learning Explained',
            videoId: 'ukzFI9rgwfU',
            description: 'A comprehensive introduction to machine learning concepts'
          },
          {
            id: 'vid2',
            title: 'Types of Machine Learning',
            videoId: 'f_uwKZIAeM0',
            description: 'Understanding supervised, unsupervised, and reinforcement learning'
          }
        ]
      },
      {
        id: 'linear-regression',
        title: 'Linear Regression',
        duration: '50 min',
        summary: 'Deep dive into linear regression, cost functions, gradient descent, and model evaluation metrics.',
        textbookReferences: [
          {
            id: 'ref3',
            title: 'Pattern Recognition and Machine Learning',
            author: 'Christopher Bishop',
            chapter: 'Chapter 3',
            pages: '137-178'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid3',
            title: 'Linear Regression Explained',
            videoId: 'nk2CQITm_eo',
            description: 'Complete guide to linear regression'
          }
        ]
      },
      {
        id: 'logistic-regression',
        title: 'Logistic Regression',
        duration: '48 min',
        summary: 'Classification using logistic regression, sigmoid function, and maximum likelihood estimation.',
        textbookReferences: [
          {
            id: 'ref4',
            title: 'Pattern Recognition and Machine Learning',
            author: 'Christopher Bishop',
            chapter: 'Chapter 4',
            pages: '179-224'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid4',
            title: 'Logistic Regression',
            videoId: 'yIYKR4sgzI8',
            description: 'Understanding logistic regression for classification'
          }
        ]
      },
      // Adding more lectures to reach 10
      {
        id: 'decision-trees',
        title: 'Decision Trees',
        duration: '42 min',
        summary: 'Tree-based learning algorithms, entropy, information gain, and pruning techniques.',
        textbookReferences: [
          {
            id: 'ref5',
            title: 'The Elements of Statistical Learning',
            author: 'Hastie, Tibshirani, Friedman',
            chapter: 'Chapter 9',
            pages: '305-317'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid5',
            title: 'Decision Trees Explained',
            videoId: '7VeUPuFGJHk',
            description: 'Complete guide to decision trees'
          }
        ]
      },
      {
        id: 'random-forest',
        title: 'Random Forest and Ensemble Methods',
        duration: '46 min',
        summary: 'Ensemble learning, bootstrap aggregating, random forests, and boosting algorithms.',
        textbookReferences: [
          {
            id: 'ref6',
            title: 'The Elements of Statistical Learning',
            author: 'Hastie, Tibshirani, Friedman',
            chapter: 'Chapter 15',
            pages: '587-622'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid6',
            title: 'Random Forest Algorithm',
            videoId: 'J4Wdy0Wc_xQ',
            description: 'Understanding ensemble methods and random forests'
          }
        ]
      },
      {
        id: 'svm',
        title: 'Support Vector Machines',
        duration: '52 min',
        summary: 'Support vector machines, kernel trick, and optimization for classification and regression.',
        textbookReferences: [
          {
            id: 'ref7',
            title: 'Pattern Recognition and Machine Learning',
            author: 'Christopher Bishop',
            chapter: 'Chapter 7',
            pages: '325-358'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid7',
            title: 'Support Vector Machines',
            videoId: 'efR1C6CvhmE',
            description: 'SVM explained with examples'
          }
        ]
      },
      {
        id: 'neural-networks',
        title: 'Neural Networks Basics',
        duration: '55 min',
        summary: 'Introduction to artificial neural networks, perceptrons, and backpropagation algorithm.',
        textbookReferences: [
          {
            id: 'ref8',
            title: 'Pattern Recognition and Machine Learning',
            author: 'Christopher Bishop',
            chapter: 'Chapter 5',
            pages: '225-294'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid8',
            title: 'Neural Networks Explained',
            videoId: 'aircAruvnKk',
            description: 'But what is a neural network?'
          }
        ]
      },
      {
        id: 'deep-learning',
        title: 'Introduction to Deep Learning',
        duration: '48 min',
        summary: 'Deep neural networks, convolutional neural networks, and modern architectures.',
        textbookReferences: [
          {
            id: 'ref9',
            title: 'Deep Learning',
            author: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville',
            chapter: 'Chapter 6',
            pages: '164-223'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid9',
            title: 'Deep Learning Explained',
            videoId: 'VyWAvY2CF9c',
            description: 'Introduction to deep learning concepts'
          }
        ]
      },
      {
        id: 'clustering',
        title: 'Clustering Algorithms',
        duration: '44 min',
        summary: 'Unsupervised learning with K-means, hierarchical clustering, and DBSCAN.',
        textbookReferences: [
          {
            id: 'ref10',
            title: 'Pattern Recognition and Machine Learning',
            author: 'Christopher Bishop',
            chapter: 'Chapter 9',
            pages: '423-459'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid10',
            title: 'Clustering Algorithms',
            videoId: '4b5d3muPQmA',
            description: 'K-means and other clustering techniques'
          }
        ]
      },
      {
        id: 'model-evaluation',
        title: 'Model Evaluation and Validation',
        duration: '40 min',
        summary: 'Cross-validation, bias-variance tradeoff, overfitting, and performance metrics.',
        textbookReferences: [
          {
            id: 'ref11',
            title: 'The Elements of Statistical Learning',
            author: 'Hastie, Tibshirani, Friedman',
            chapter: 'Chapter 7',
            pages: '241-249'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid11',
            title: 'Model Validation Techniques',
            videoId: 'fSytzGwwBVw',
            description: 'Cross-validation and model evaluation'
          }
        ]
      }
    ]
  },
  {
    id: 'cs-algorithms',
    title: 'Computer Science Algorithms',
    description: 'Master essential algorithms and data structures used in computer science and software development.',
    category: 'Computer Science',
    duration: '10 weeks',
    level: 'Intermediate',
    lectures: [
      {
        id: 'algo-intro',
        title: 'Algorithm Analysis and Big O Notation',
        duration: '50 min',
        summary: 'Introduction to algorithm complexity analysis, Big O notation, and time/space complexity.',
        textbookReferences: [
          {
            id: 'ref1',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 3',
            pages: '43-68'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid1',
            title: 'Big O Notation Explained',
            videoId: 'D6xkbGLQesk',
            description: 'Understanding algorithm complexity'
          }
        ]
      },
      // Adding 9 more lectures for CS Algorithms
      {
        id: 'sorting',
        title: 'Sorting Algorithms',
        duration: '55 min',
        summary: 'Comparison-based sorting: merge sort, quicksort, heap sort, and their complexities.',
        textbookReferences: [
          {
            id: 'ref2',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 2',
            pages: '16-42'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid2',
            title: 'Sorting Algorithms Visualization',
            videoId: 'kPRA0W1kECg',
            description: 'Visual comparison of sorting algorithms'
          }
        ]
      },
      {
        id: 'searching',
        title: 'Searching Algorithms',
        duration: '45 min',
        summary: 'Binary search, linear search, and search optimization techniques.',
        textbookReferences: [
          {
            id: 'ref3',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 2',
            pages: '39-41'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid3',
            title: 'Binary Search Algorithm',
            videoId: 'P3YID7liBug',
            description: 'Binary search explained step by step'
          }
        ]
      },
      {
        id: 'data-structures',
        title: 'Basic Data Structures',
        duration: '48 min',
        summary: 'Arrays, linked lists, stacks, queues, and their implementations.',
        textbookReferences: [
          {
            id: 'ref4',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 10',
            pages: '232-255'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid4',
            title: 'Data Structures Explained',
            videoId: 'RBSGKlAvoiM',
            description: 'Introduction to basic data structures'
          }
        ]
      },
      {
        id: 'trees',
        title: 'Trees and Binary Search Trees',
        duration: '52 min',
        summary: 'Tree data structures, binary search trees, traversal algorithms, and balancing.',
        textbookReferences: [
          {
            id: 'ref5',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 12',
            pages: '286-306'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid5',
            title: 'Binary Search Trees',
            videoId: 'gcULXE7ViZw',
            description: 'BST operations and implementation'
          }
        ]
      },
      {
        id: 'graphs',
        title: 'Graph Algorithms',
        duration: '58 min',
        summary: 'Graph representations, BFS, DFS, shortest path algorithms, and minimum spanning trees.',
        textbookReferences: [
          {
            id: 'ref6',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 22',
            pages: '589-630'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid6',
            title: 'Graph Algorithms',
            videoId: 'TwMbCWdWYTQ',
            description: 'BFS and DFS explained'
          }
        ]
      },
      {
        id: 'dynamic-programming',
        title: 'Dynamic Programming',
        duration: '60 min',
        summary: 'Dynamic programming principles, memoization, and classic DP problems.',
        textbookReferences: [
          {
            id: 'ref7',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 15',
            pages: '359-420'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid7',
            title: 'Dynamic Programming',
            videoId: 'oBt53YbR9Kk',
            description: 'Dynamic programming explained with examples'
          }
        ]
      },
      {
        id: 'greedy-algorithms',
        title: 'Greedy Algorithms',
        duration: '46 min',
        summary: 'Greedy algorithm design, activity selection, and Huffman coding.',
        textbookReferences: [
          {
            id: 'ref8',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 16',
            pages: '414-442'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid8',
            title: 'Greedy Algorithms',
            videoId: 'HzeK7g8cD0Y',
            description: 'Greedy approach to problem solving'
          }
        ]
      },
      {
        id: 'hash-tables',
        title: 'Hash Tables and Hashing',
        duration: '44 min',
        summary: 'Hash functions, collision resolution, and hash table applications.',
        textbookReferences: [
          {
            id: 'ref9',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 11',
            pages: '253-285'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid9',
            title: 'Hash Tables Explained',
            videoId: 'shs0KM3wKv8',
            description: 'How hash tables work'
          }
        ]
      },
      {
        id: 'advanced-topics',
        title: 'Advanced Algorithm Topics',
        duration: '50 min',
        summary: 'Network flows, string algorithms, and computational complexity theory.',
        textbookReferences: [
          {
            id: 'ref10',
            title: 'Introduction to Algorithms',
            author: 'Cormen, Leiserson, Rivest, Stein',
            chapter: 'Chapter 26',
            pages: '708-740'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid10',
            title: 'Advanced Algorithms',
            videoId: 'BuvKtryaKBE',
            description: 'Complex algorithmic concepts'
          }
        ]
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis, visualization, and statistical methods for extracting insights from data.',
    category: 'Data Science',
    duration: '14 weeks',
    level: 'Beginner',
    lectures: [
      {
        id: 'ds-intro',
        title: 'Introduction to Data Science',
        duration: '40 min',
        summary: 'Overview of data science workflow, types of data analysis, and the data science process.',
        textbookReferences: [
          {
            id: 'ref1',
            title: 'Python for Data Analysis',
            author: 'Wes McKinney',
            chapter: 'Chapter 1',
            pages: '1-20'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid1',
            title: 'What is Data Science?',
            videoId: 'X3paOmcrTjQ',
            description: 'Introduction to data science concepts'
          }
        ]
      },
      // Adding 9 more lectures for Data Science
      {
        id: 'python-pandas',
        title: 'Data Manipulation with Pandas',
        duration: '55 min',
        summary: 'Data loading, cleaning, transformation, and manipulation using Python pandas library.',
        textbookReferences: [
          {
            id: 'ref2',
            title: 'Python for Data Analysis',
            author: 'Wes McKinney',
            chapter: 'Chapter 5',
            pages: '125-184'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid2',
            title: 'Pandas Tutorial',
            videoId: 'vmEHCJofslg',
            description: 'Complete pandas tutorial for beginners'
          }
        ]
      },
      {
        id: 'data-visualization',
        title: 'Data Visualization',
        duration: '48 min',
        summary: 'Creating effective visualizations using matplotlib, seaborn, and plotly.',
        textbookReferences: [
          {
            id: 'ref3',
            title: 'Python for Data Analysis',
            author: 'Wes McKinney',
            chapter: 'Chapter 9',
            pages: '255-295'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid3',
            title: 'Data Visualization with Python',
            videoId: 'UO98lJQ3QGI',
            description: 'Creating beautiful plots and charts'
          }
        ]
      },
      {
        id: 'statistics',
        title: 'Statistical Analysis',
        duration: '52 min',
        summary: 'Descriptive statistics, probability distributions, and hypothesis testing.',
        textbookReferences: [
          {
            id: 'ref4',
            title: 'Think Stats',
            author: 'Allen B. Downey',
            chapter: 'Chapter 1-3',
            pages: '1-45'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid4',
            title: 'Statistics for Data Science',
            videoId: 'xxpc-HPKN28',
            description: 'Essential statistics concepts'
          }
        ]
      },
      {
        id: 'data-cleaning',
        title: 'Data Cleaning and Preprocessing',
        duration: '46 min',
        summary: 'Handling missing data, outliers, data types, and feature engineering techniques.',
        textbookReferences: [
          {
            id: 'ref5',
            title: 'Python for Data Analysis',
            author: 'Wes McKinney',
            chapter: 'Chapter 7',
            pages: '195-225'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid5',
            title: 'Data Cleaning Techniques',
            videoId: 'ZOX18HfLHGQ',
            description: 'How to clean messy data'
          }
        ]
      },
      {
        id: 'exploratory-analysis',
        title: 'Exploratory Data Analysis',
        duration: '50 min',
        summary: 'EDA techniques, correlation analysis, and pattern discovery in datasets.',
        textbookReferences: [
          {
            id: 'ref6',
            title: 'Python for Data Analysis',
            author: 'Wes McKinney',
            chapter: 'Chapter 10',
            pages: '297-330'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid6',
            title: 'Exploratory Data Analysis',
            videoId: 'xi0vhXFPegw',
            description: 'EDA with Python and pandas'
          }
        ]
      },
      {
        id: 'sql-databases',
        title: 'Working with Databases and SQL',
        duration: '54 min',
        summary: 'SQL fundamentals, database connections, and data extraction from relational databases.',
        textbookReferences: [
          {
            id: 'ref7',
            title: 'Python for Data Analysis',
            author: 'Wes McKinney',
            chapter: 'Chapter 6',
            pages: '185-194'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid7',
            title: 'SQL for Data Science',
            videoId: 'HXV3zeQKqGY',
            description: 'SQL basics for data analysis'
          }
        ]
      },
      {
        id: 'time-series',
        title: 'Time Series Analysis',
        duration: '58 min',
        summary: 'Time series data manipulation, trends, seasonality, and forecasting basics.',
        textbookReferences: [
          {
            id: 'ref8',
            title: 'Python for Data Analysis',
            author: 'Wes McKinney',
            chapter: 'Chapter 11',
            pages: '331-364'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid8',
            title: 'Time Series Analysis',
            videoId: 'e8Yw4alG16Q',
            description: 'Working with time series data'
          }
        ]
      },
      {
        id: 'web-scraping',
        title: 'Web Scraping and APIs',
        duration: '45 min',
        summary: 'Data collection from web sources, APIs, and automated data gathering techniques.',
        textbookReferences: [
          {
            id: 'ref9',
            title: 'Python for Data Analysis',
            author: 'Wes McKinney',
            chapter: 'Chapter 6',
            pages: '185-194'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid9',
            title: 'Web Scraping with Python',
            videoId: 'XVv6mJpFOb0',
            description: 'How to scrape data from websites'
          }
        ]
      },
      {
        id: 'reporting',
        title: 'Data Reporting and Dashboards',
        duration: '42 min',
        summary: 'Creating reports, interactive dashboards, and communicating insights effectively.',
        textbookReferences: [
          {
            id: 'ref10',
            title: 'Storytelling with Data',
            author: 'Cole Nussbaumer Knaflic',
            chapter: 'Chapter 1-2',
            pages: '1-45'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid10',
            title: 'Creating Data Dashboards',
            videoId: 'hSPmj7mK6ng',
            description: 'Building interactive dashboards'
          }
        ]
      }
    ]
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering Principles',
    description: 'Learn software development best practices, design patterns, and engineering methodologies.',
    category: 'Engineering',
    duration: '16 weeks',
    level: 'Intermediate',
    lectures: [
      {
        id: 'se-intro',
        title: 'Introduction to Software Engineering',
        duration: '45 min',
        summary: 'Software development lifecycle, engineering principles, and project management basics.',
        textbookReferences: [
          {
            id: 'ref1',
            title: 'Software Engineering',
            author: 'Ian Sommerville',
            chapter: 'Chapter 1',
            pages: '1-25'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid1',
            title: 'Software Engineering Basics',
            videoId: 'O753uuutqH8',
            description: 'Introduction to software engineering'
          }
        ]
      },
      // Adding 9 more lectures for Software Engineering
      {
        id: 'design-patterns',
        title: 'Design Patterns',
        duration: '55 min',
        summary: 'Common design patterns: Singleton, Factory, Observer, and MVC architecture.',
        textbookReferences: [
          {
            id: 'ref2',
            title: 'Design Patterns',
            author: 'Gang of Four',
            chapter: 'Chapter 1-3',
            pages: '1-80'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid2',
            title: 'Design Patterns Explained',
            videoId: 'NU_1StN5Tkk',
            description: 'Common software design patterns'
          }
        ]
      },
      {
        id: 'testing',
        title: 'Software Testing',
        duration: '50 min',
        summary: 'Unit testing, integration testing, TDD, and testing frameworks.',
        textbookReferences: [
          {
            id: 'ref3',
            title: 'Software Engineering',
            author: 'Ian Sommerville',
            chapter: 'Chapter 8',
            pages: '201-235'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid3',
            title: 'Software Testing Tutorial',
            videoId: 'u6QfIXgjwGQ',
            description: 'Testing strategies and best practices'
          }
        ]
      },
      {
        id: 'version-control',
        title: 'Version Control with Git',
        duration: '48 min',
        summary: 'Git fundamentals, branching strategies, and collaborative development workflows.',
        textbookReferences: [
          {
            id: 'ref4',
            title: 'Pro Git',
            author: 'Scott Chacon, Ben Straub',
            chapter: 'Chapter 1-3',
            pages: '1-78'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid4',
            title: 'Git Tutorial for Beginners',
            videoId: 'HVsySz-h9r4',
            description: 'Complete Git tutorial'
          }
        ]
      },
      {
        id: 'agile-scrum',
        title: 'Agile and Scrum Methodologies',
        duration: '46 min',
        summary: 'Agile principles, Scrum framework, sprints, and team collaboration.',
        textbookReferences: [
          {
            id: 'ref5',
            title: 'Agile Software Development',
            author: 'Alistair Cockburn',
            chapter: 'Chapter 1-2',
            pages: '1-50'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid5',
            title: 'Agile and Scrum Explained',
            videoId: 'SWDhGSZNF9M',
            description: 'Understanding Agile methodology'
          }
        ]
      },
      {
        id: 'code-quality',
        title: 'Code Quality and Refactoring',
        duration: '52 min',
        summary: 'Clean code principles, code smells, refactoring techniques, and code reviews.',
        textbookReferences: [
          {
            id: 'ref6',
            title: 'Clean Code',
            author: 'Robert C. Martin',
            chapter: 'Chapter 1-3',
            pages: '1-66'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid6',
            title: 'Clean Code Principles',
            videoId: '7EmboKQH8lM',
            description: 'Writing maintainable code'
          }
        ]
      },
      {
        id: 'architecture',
        title: 'Software Architecture',
        duration: '58 min',
        summary: 'Architectural patterns, microservices, monoliths, and system design principles.',
        textbookReferences: [
          {
            id: 'ref7',
            title: 'Software Architecture in Practice',
            author: 'Bass, Clements, Kazman',
            chapter: 'Chapter 1-2',
            pages: '1-45'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid7',
            title: 'Software Architecture Patterns',
            videoId: 'lTkL1oIMiaU',
            description: 'System design and architecture'
          }
        ]
      },
      {
        id: 'databases',
        title: 'Database Design and Management',
        duration: '54 min',
        summary: 'Database normalization, SQL optimization, NoSQL databases, and data modeling.',
        textbookReferences: [
          {
            id: 'ref8',
            title: 'Database System Concepts',
            author: 'Silberschatz, Galvin, Gagne',
            chapter: 'Chapter 1-3',
            pages: '1-85'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid8',
            title: 'Database Design Tutorial',
            videoId: 'ztHopE5Wnpc',
            description: 'Database design principles'
          }
        ]
      },
      {
        id: 'security',
        title: 'Software Security',
        duration: '50 min',
        summary: 'Security vulnerabilities, authentication, authorization, and secure coding practices.',
        textbookReferences: [
          {
            id: 'ref9',
            title: 'Software Security',
            author: 'Gary McGraw',
            chapter: 'Chapter 1-2',
            pages: '1-55'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid9',
            title: 'Software Security Basics',
            videoId: 'QQq4bWGdqvY',
            description: 'Security best practices'
          }
        ]
      },
      {
        id: 'deployment',
        title: 'Deployment and DevOps',
        duration: '48 min',
        summary: 'CI/CD pipelines, containerization with Docker, and cloud deployment strategies.',
        textbookReferences: [
          {
            id: 'ref10',
            title: 'The DevOps Handbook',
            author: 'Gene Kim',
            chapter: 'Chapter 1-2',
            pages: '1-60'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid10',
            title: 'DevOps Explained',
            videoId: 'Xrgk023l4lI',
            description: 'CI/CD and deployment strategies'
          }
        ]
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Modern Web Development',
    description: 'Build modern web applications using HTML, CSS, JavaScript, and popular frameworks.',
    category: 'Web Development',
    duration: '18 weeks',
    level: 'Beginner',
    lectures: [
      {
        id: 'html-css',
        title: 'HTML and CSS Fundamentals',
        duration: '50 min',
        summary: 'HTML structure, semantic markup, CSS styling, flexbox, and grid layouts.',
        textbookReferences: [
          {
            id: 'ref1',
            title: 'HTML and CSS',
            author: 'Jon Duckett',
            chapter: 'Chapter 1-5',
            pages: '1-120'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid1',
            title: 'HTML & CSS Crash Course',
            videoId: 'UB1O30fR-EE',
            description: 'Complete HTML and CSS tutorial'
          }
        ]
      },
      // Adding 9 more lectures for Web Development
      {
        id: 'javascript',
        title: 'JavaScript Fundamentals',
        duration: '60 min',
        summary: 'JavaScript syntax, DOM manipulation, events, and ES6+ features.',
        textbookReferences: [
          {
            id: 'ref2',
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            chapter: 'Chapter 1-4',
            pages: '1-80'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid2',
            title: 'JavaScript Tutorial for Beginners',
            videoId: 'PkZNo7MFNFg',
            description: 'Complete JavaScript course'
          }
        ]
      },
      {
        id: 'react',
        title: 'React.js Introduction',
        duration: '55 min',
        summary: 'React components, JSX, state management, and hooks.',
        textbookReferences: [
          {
            id: 'ref3',
            title: 'Learning React',
            author: 'Alex Banks, Eve Porcello',
            chapter: 'Chapter 1-3',
            pages: '1-85'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid3',
            title: 'React Tutorial for Beginners',
            videoId: 'Ke90Tje7VS0',
            description: 'Complete React.js tutorial'
          }
        ]
      },
      {
        id: 'responsive-design',
        title: 'Responsive Web Design',
        duration: '48 min',
        summary: 'Mobile-first design, media queries, and responsive layouts.',
        textbookReferences: [
          {
            id: 'ref4',
            title: 'Responsive Web Design',
            author: 'Ethan Marcotte',
            chapter: 'Chapter 1-3',
            pages: '1-75'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid4',
            title: 'Responsive Design Tutorial',
            videoId: 'srvUrASNdXk',
            description: 'Creating responsive websites'
          }
        ]
      },
      {
        id: 'nodejs',
        title: 'Node.js and Express',
        duration: '52 min',
        summary: 'Server-side JavaScript, Express.js framework, and building APIs.',
        textbookReferences: [
          {
            id: 'ref5',
            title: 'Node.js in Action',
            author: 'Alex Young',
            chapter: 'Chapter 1-3',
            pages: '1-90'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid5',
            title: 'Node.js Tutorial',
            videoId: 'TlB_eWDSMt4',
            description: 'Node.js and Express.js tutorial'
          }
        ]
      },
      {
        id: 'apis',
        title: 'RESTful APIs and AJAX',
        duration: '46 min',
        summary: 'REST principles, HTTP methods, AJAX requests, and API integration.',
        textbookReferences: [
          {
            id: 'ref6',
            title: 'RESTful Web Services',
            author: 'Leonard Richardson',
            chapter: 'Chapter 1-2',
            pages: '1-60'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid6',
            title: 'REST API Tutorial',
            videoId: 'SLwpqD8n3d0',
            description: 'Building RESTful APIs'
          }
        ]
      },
      {
        id: 'webpack',
        title: 'Build Tools and Webpack',
        duration: '44 min',
        summary: 'Module bundling, Webpack configuration, and build optimization.',
        textbookReferences: [
          {
            id: 'ref7',
            title: 'Webpack Documentation',
            author: 'Webpack Team',
            chapter: 'Getting Started',
            pages: '1-30'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid7',
            title: 'Webpack Tutorial',
            videoId: 'lziuNMk_8eQ',
            description: 'Module bundling with Webpack'
          }
        ]
      },
      {
        id: 'testing-web',
        title: 'Web Application Testing',
        duration: '50 min',
        summary: 'Unit testing, integration testing, and end-to-end testing for web apps.',
        textbookReferences: [
          {
            id: 'ref8',
            title: 'Testing JavaScript Applications',
            author: 'Lucas da Costa',
            chapter: 'Chapter 1-3',
            pages: '1-80'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid8',
            title: 'JavaScript Testing Tutorial',
            videoId: 'r9HdJ8P6GQI',
            description: 'Testing web applications'
          }
        ]
      },
      {
        id: 'performance',
        title: 'Web Performance Optimization',
        duration: '48 min',
        summary: 'Performance metrics, optimization techniques, and best practices.',
        textbookReferences: [
          {
            id: 'ref9',
            title: 'High Performance Web Sites',
            author: 'Steve Souders',
            chapter: 'Chapter 1-3',
            pages: '1-70'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid9',
            title: 'Web Performance Optimization',
            videoId: 'FEs2jgZBaQA',
            description: 'Optimizing web performance'
          }
        ]
      },
      {
        id: 'deployment-web',
        title: 'Web Deployment and Hosting',
        duration: '42 min',
        summary: 'Deployment strategies, hosting platforms, and production considerations.',
        textbookReferences: [
          {
            id: 'ref10',
            title: 'Web Deployment Guide',
            author: 'Various Authors',
            chapter: 'Chapter 1-2',
            pages: '1-50'
          }
        ],
        youtubeVideos: [
          {
            id: 'vid10',
            title: 'Web Deployment Tutorial',
            videoId: 'TlB_eWDSMt4',
            description: 'Deploying web applications'
          }
        ]
      }
    ]
  }
];