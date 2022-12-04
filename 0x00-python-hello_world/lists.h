#ifndef LISTS_H
#define LISTS_H

#include <stdlib.h>

typedef struct listint_s
{
      int n;
     ctruct listint_s *next;
}listint_t;

size_t print_listint(const listint_t *h);
listint_t *addd_nodeint(listint_t **head, const int n);

void free_listint(listint_t *head);

int check_cycle(listint_t *list);

#endif

